//import './DataList.css';
import { IDataItem } from "../../types";
import { useAppSelector } from '../store/hooks';
import Data from "../Data/Data";

function DataList() {
  const dataList = useAppSelector((state) => state.forms.dataList);

  let sectionDataList: JSX.Element[] = [<></>];
  sectionDataList = dataList.map((item: IDataItem, ind, arr) => {
    const last = (ind === (arr.length - 1));
    return <Data data={item} key={ind} last={last}/>
  });

  return (
    <div>
      {sectionDataList}
    </div>
  );
}

export default DataList;


