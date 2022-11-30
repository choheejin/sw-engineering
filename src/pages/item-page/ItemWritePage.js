import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function ItemWritePage() {
    const [isModified, setIsModified] = useState(false);
    const [isPublic, setIsPublic] = useState(true);
    const [plNo, setPlNo] = useState('');
    const [pNo, setPNo] = useState('')
    const [pName, setPName] = useState('');
    const navigate = new useNavigate();

    const onSubmit = () => {
        const data = {
            'plNo' : parseInt(plNo),
            'pNo' : parseInt(pNo),
            'pName' : pName,
            'cNo' : 100,
            'cName' : 'name'
        };
        axios.post('http://localhost:4000/itemList/post', data).then(response => {
            if(response.status === 200){
                alert('물품 등록이 완료되었습니다.');
                navigate('/items');
            }
        });
    };

    return(
        <div className="w-full flex justify-center">
            <div className="w-[70%] flex flex-col h-full mt-10">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col w-full h-full gap-2 mb-5 mt-3">
                        <div className="font-bold mb-3 text-lg px-1">물품 등록하기</div>
                        <div className="flex gap-2 items-center flex-col">
                            <input type="text"
                                   placeholder="물품번호"
                                   onChange={(e) => {setPlNo(e.target.value)}}
                                   className="w-full py-1 px-2 focus:outline-none rounded-sm border border-gray-200"/>
                            <input type="text"
                                   placeholder="물품고유번호"
                                   onChange={(e) => {setPNo(e.target.value)}}
                                   className="w-full py-1 px-2 focus:outline-none rounded-sm border border-gray-200"/>
                            <input type="text"
                                   placeholder="뭂품이름"
                                   onChange={(e) => {setPName(e.target.value)}}
                                   className="w-full py-1 px-2 focus:outline-none rounded-sm border border-gray-200"/>
                        </div>
                    </div>

                    <div className="flex w-full justify-end mt-7">
                        <button className="drop-shadow-sm flex items-center rounded-sm gap-2 bg-blue-500 w-fit px-4 py-1.5 text-white font-bold"
                                type="submit"
                                onClick={onSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                            </svg>
                            {isModified ? '수정하기' : '등록하기'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
