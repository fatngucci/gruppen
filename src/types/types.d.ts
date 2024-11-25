type SubGroups = string[];

interface DataSet {
    [category: string]: SubGroups
}

interface AllDataSets {
    [University: string]: DataSet
}