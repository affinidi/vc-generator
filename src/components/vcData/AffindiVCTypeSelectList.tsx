import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import AffinidiVCTypeSelect from "./AffinidiVCTypeSelect";
import 'components/vcData/AffindiVCTypeSelectList.scss';

export type CredentialRequirement = { type: string[] };

function createCredentialRequirements(
  vcTypesList: string[][]
): CredentialRequirement[] | undefined {
  const nonEmptyVCTypesList = vcTypesList.filter((arr) => arr.length > 0);
  if (nonEmptyVCTypesList.length <= 0) {
    return undefined;
  }

  return nonEmptyVCTypesList.map((vcTypes) => ({
    type: ["VerifiableCredential", ...vcTypes],
  }));
}

type Props = {
  setCredentialRequirements(
    credentialRequirements: CredentialRequirement[] | undefined
  ): void;
};

const AffinidiVCTypeSelectList = ({ setCredentialRequirements }: Props) => {
  const [vcTypesList, setVCTypesList] = useState<string[][]>([[]]);

  useEffect(() => {
    setCredentialRequirements(createCredentialRequirements(vcTypesList));
  }, [vcTypesList]);

  return (
    <>
      {vcTypesList.map((vcTypes, idx) => (
        <InputGroup>
          <AffinidiVCTypeSelect
            className="vcTypeSelect"
            value={vcTypes}
            onChange={(value) => {
              const toSet = Array.isArray(value) ? value : [];
              const result = Object.assign([], vcTypesList, { [idx]: toSet });

              setVCTypesList(result);
            }}
          />
        </InputGroup>
      ))}
      {/* <div style={{ paddingTop: 15 }}>
        <Button
          size="sm"
          style={{ marginRight: 5 }}
          onClick={() => setVCTypesList([...vcTypesList, []])}
        >
          +
        </Button>
        <Button
          size="sm"
          disabled={vcTypesList.length < 2}
          onClick={() =>
            setVCTypesList(vcTypesList.slice(0, vcTypesList.length - 1))
          }
        >
          -
        </Button>
      </div> */}
    </>
  );
};

export default AffinidiVCTypeSelectList;
