import React, { useMemo } from "react";
import Select from "react-select";
import * as vcData from "@affinidi/vc-data";
console.log('vcData: ', vcData);

type Props = {
  value: string[] | undefined;
  className?: string;
  onChange(type: string[] | undefined): void;
};


// find every get...Context function in vc-data
// call each of the found function
// reduce into a single unique list of vc types
const AFFINIDI_VC_TYPES: string[] = Array.from(
  Object.keys(vcData)
    .filter(
      (key) =>
        key.startsWith("get") &&
        key.endsWith("Context") &&
        (vcData as any)[key] instanceof Function
    )
    .reduce((set, funcKey) => {
        console.log('set: ', set);
        console.log('funcKey: ', funcKey);
        
      const getContextFunc = (vcData as any)[funcKey];
      console.log('getContextFunc: ', getContextFunc);
      const context = getContextFunc();
      console.log('context: ', context);
      const vcTypes = Object.keys(context).filter((key) => key !== "data");
      vcTypes.forEach((vcType) => set.add(vcType));
      return set;
    }, new Set<string>())
);

const REACT_SELECT_OPTIONS: {
  label: string;
  value: string;
}[] = AFFINIDI_VC_TYPES.map((value) => ({ label: value, value }));

const AffinidiVCTypeSelect = ({ value, className, onChange }: Props) => {
  const selected = useMemo(
    () =>
      REACT_SELECT_OPTIONS.filter(({ value: optionValue }) =>
        value?.includes(optionValue)
      ),
    [value]
  );

  return (
    <Select
      classNamePrefix="select"
      isClearable={true}
      isSearchable={true}
      name="vcType"
      className={className}
      isMulti={true}
      options={REACT_SELECT_OPTIONS}
      value={selected}
      onChange={(selected: any) =>
        selected
          ? onChange(selected.map(({ value }: any) => value))
          : onChange(undefined)
      }
    />
  );
};

export default AffinidiVCTypeSelect;
