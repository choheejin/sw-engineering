import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ItemListPage() {
    const [userType, setUserType] = new useState('admin');
    const [Response, setResponse] = new useState([]);
    const [loading, setLoading] = new useState(false);

    const navigate = new useNavigate();
    const getItems = async() => {
        try {
            return await axios.get('http://localhost:4000/items/');
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if(!loading) {
            getItems().then(response => {
                if(response.data) {
                    response.data.forEach(item => {
                        setResponse(data => [...data , item]);
                    });
                    console.log(Response);
                    setLoading(true);
                }
            });
        }
    }, [loading]);

    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-[60%] flex flex-col gap-8 mt-10">
                <div className="w-full flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:stroke-pink-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className="w-full">
                    </input>
                </div>
                <table className="text-center">
                    <tr>
                        <th>번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>등록날짜</th>
                    </tr>
                    {
                        Response ? Response.map((item) => {return (<tr key={item._id} className="cursor-pointer hover:bg-gray-200" onClick={() => {navigate(`/item/${item._id}`);}}><td>{item.pNo}</td><td>{item.pName}</td><td>{item.pPrice}</td><td>{item.createdAt}</td></tr>)}) : <></>
                    }
                </table>
                {userType === 'admin' ? <button className="bg-green-500 font-bold text-white py-1" onClick={() => navigate('/item/apply')}>물품 등록하기</button> : <></>}
            </div>
        </div>
    );
}
