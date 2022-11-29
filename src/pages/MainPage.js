import {useState} from "react";

function MainPage() {
    const [userType, setUserType] = new useState('admin');

    return(
        <div className="w-full flex justify-center">
            <div className={`w-[75%] mt-32 grid  gap-16 items-center justify-center ${userType==='user'? 'grid-cols-4': 'grid-cols-6'}`}>
                {userType==='admin'?<a className="border-blue-500 border h-16 flex justify-center items-center" href="/employee">직원</a>:<></>}
                <a className="border-blue-500 border h-16 flex justify-center items-center" href="/user">고객</a>
                {userType==='admin'?<a href="/items" className="border-blue-500 border h-16 flex justify-center items-center">판매목록</a>:<a href="/items" className="border-blue-500 border h-16 flex justify-center items-center">물품목록</a>}
                {userType==='admin'?<a className="border-blue-500 border h-16 flex justify-center items-center" href="/suppliers">공급업체목록</a>:<></>}
                <a className="border-blue-500 border h-16 flex justify-center items-center" href="/repairs">수리목록</a>
                <a className="border-blue-500 border h-16 flex justify-center items-center" href="/orders">주문/반품</a>
            </div>
        </div>
    );
}

export default MainPage;