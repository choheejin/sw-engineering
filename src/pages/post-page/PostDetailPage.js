import {useParams} from "react-router-dom";
import {useState} from "react";
import {CommentItem, PostItem, PostWriter} from "./components";

export default function PostDetailPage() {
    const n = [
        {
            id: 1,
            url: '../../images/sample.jpeg',
            title: '타이틀11',
            content: '11입니다'
        }, {
            id: 2,
            url: '../../images/sample22.jpeg',
            title: '타이틀22',
            content: '22입니다'
        }, {
            id: 3,
            url: '../../images/sample.jpeg',
            title: '타이틀33',
            content: '33입니다'
        }]; // 가데이터

    const data = '노래하며 능히 그들을 있는 따뜻한 역사를 봄날의 있는 것이다. \n 뭇 군영과 내려온 봄바람을 우는 가는 사막이다. 밥을 때에, 천고에 희망의 우리의 듣기만 얼마나 놀이 것이다. 있는 예수는 있음으로써 용감하고 보배를 피다. 청춘이 발휘하기 창공에 남는 아름다우냐? 것은 발휘하기 구하지 더운지라 할지니, 있음으로써 피어나기 너의 몸이 철환하였는가? 인간의 없으면, 이것을 간에 우리 그들의 주며, 피다. 뜨고, 속잎나고, 대고, 남는 듣기만 몸이 이것은 사막이다. 이는 소리다.이것은 힘차게 크고 인간에 발휘하기 군영과 황금시대를 밥을 봄바람이다. 사라지지 주며, 쓸쓸한 아름다우냐? 얼음과 보내는 같으며, 힘차게 피어나기 칼이다.\n';


    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[60%] flex flex-col gap-8 mb-20">

                {/*글내용*/}
                <div className="w-full flex flex-col gap-4  mt-20">
                    <div className="flex">
                        <img className="w-1/3 object-center object-cover" src='../../images/sample.png'></img>
                        <div className="flex flex-col">
                            <div className="font-bold">제품명 </div>
                            <div>판매가</div>
                            <div>배송료</div>
                            <div className="">
                                제품 수량 <input className="focus:outline-none border border-gray-200" type="number" min="1" placeholder="1"/>
                            </div>
                            <div className="">
                                <button>장바구니 담기</button>
                                <button>바로구매</button>
                                <button>수정하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="min-w-fit border-r-2">제품소개</div>
                        <div>
                            {
                                data.split("\n").map((txt) => (
                                    <div>{txt}<br/></div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <button>뒤로가기</button>
            </div>
        </div>
    );
}