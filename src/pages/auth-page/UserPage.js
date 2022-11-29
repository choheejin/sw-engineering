
export default function UserPage() {

    const n = [1,2,3,4,];

    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-[60%] mt-10 flex flex-col gap-8 mb-20">
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
                        <th>아이디</th>
                        <th>이름</th>
                        <th>전화번호</th>
                    </tr>
                    {
                        n.map(item => {return (<tr className="cursor-pointer hover:bg-gray-200"><td>번호</td><td>아이디</td><td>이름</td><td>전화번호</td></tr>)})
                    }
                </table>

            </div>
            </div>
        // </div>
    );
};