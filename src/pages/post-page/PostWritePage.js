import {useState} from "react";

export default function PostWritePage() {
    const [isModified, setIsModified] = useState(false);
    const [isPublic, setIsPublic] = useState(true);

    const onSubmit = () => {

    };

    return(
        <div className="w-full flex justify-center">
            <div className="w-[70%] flex flex-col h-full">
                <form>
                    <div className="flex flex-col w-full h-full gap-2 mb-5 mt-3">
                        <div className="font-bold mb-3 text-lg px-1">글 작성하기</div>
                        <div className="flex gap-2 items-center">
                            <input type="text"
                                   placeholder="제목"
                                   className="w-full py-1 px-2 focus:outline-none rounded-sm border border-gray-200"/>
                        </div>
                        <textarea className="resize-none w-full h-80 mt-1 focus:outline-none p-1 rounded-sm border border-gray-200"></textarea>
                    </div>

                    <div className="grid grid-cols-2 w-full h-full border py-4 border-gray-200 px-6 bg-white drop-shadow-md">
                        <div className="flex items-center gap-6">
                            <div className="font-bold">카테고리</div>
                            <select className="focus:outline-none p-1 border border-gray-200 rounded-sm">
                                <option>일상</option>
                                <option>고민</option>
                                <option>질문</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="font-bold">공개설정</div>
                            <div className="flex gap-4 items-center">
                                <label ><input className="mr-1" type="radio" name="all" checked={isPublic} onChange={() => setIsPublic(!isPublic)}/>전체공개</label>
                                <label><input className="mr-1" type="radio" name="none" checked={!isPublic} onChange={() => setIsPublic(!isPublic)}/>비공개</label>
                            </div>
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
