import {PostWriter} from "./components";
import {useNavigate} from "react-router-dom";

export default function PostListPage() {
    const navigate = new useNavigate();
    const n = [
        {
            id: 1,
            title: '타이틀11',
        }, {
            id: 2,
            title: '타이틀22',
        }, {
            id: 3,
            title: '타이틀33',
        }, {
            id: 4,
            title: '타이틀44',
        },
        {
            id: 5,
            title: '타이틀55',
        }]; // 가데이터


    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-[60%] flex flex-col gap-8">
                <div className="w-full flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:stroke-pink-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className="w-full">
                    </input>
                </div>
                <table>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성날짜</th>
                    </tr>
                    {
                        n.map(item => {return (<tr className="cursor-pointer hover:bg-gray-200" onClick={() => {navigate(`/item/${item.id}`);}}><td>{item.id}</td><td>{item.title}</td><td>작성자</td><td>작성날짜</td></tr>)})
                    }
                </table>
            </div>
        </div>


    );
}
