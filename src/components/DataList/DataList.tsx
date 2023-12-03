//import './DataList.css';
import { IDataItem } from "../../types";
import { useAppSelector } from '../store/hooks';
import Data from "../Data/Data";

function DataList() {
  const dataList = useAppSelector((state) => state.forms.dataList);

  let sectionDataList: JSX.Element[] = [<></>];
  sectionDataList = dataList.map((item: IDataItem) => (
    <Data data={item} key={item.name} />
  ));

  return (
    <div>
      {sectionDataList}
    </div>
  );
}

export default DataList;


