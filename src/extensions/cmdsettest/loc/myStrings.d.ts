declare interface ICmdsettestCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'CmdsettestCommandSetStrings' {
  const strings: ICmdsettestCommandSetStrings;
  export = strings;
}
