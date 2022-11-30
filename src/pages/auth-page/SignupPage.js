import {useState} from "react";
import axios from "axios";

function SignupPage() {
    const [userID, setUserID] = new useState('');
    const [password, setPassword] = new useState('');
    const [cusName, setName] = new useState('');
    const [cusTel, setTel] = new useState('');

    const submitInfo = (e) => {
        const data = {
            'cusNo' : '1',
            'cusID' : userID,
            'cusName' : cusName,
            'cusTel' : cusTel,
            'cusPw' : password,
        }
        axios.post('https://localhost:4000', data).then(response => {
                console.log(response);
            }
        );
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-[75%] flex flex-col items-center mt-32">
                <form onSubmit={(e) => {submitInfo(e)}}
                      className="flex flex-col gap-3 w-2/5">
                    <div className="font-bold text-xl mb-2">회원 가입하기</div>
                    <input type="text"
                           name="id"
                           className="focus:outline-none border border-gray-300 rounded-sm py-1"
                           onChange={(e) => { setUserID(e.target.value) }}/>
                    <input type="text"
                           name="name"
                           className="focus:outline-none border border-gray-300 rounded-sm py-1"
                           onChange={(e) => { setName(e.target.value)}}/>
                    <input type="tel"
                           name="tel"
                           className="focus:outline-none border border-gray-300 rounded-sm py-1"
                           onChange={(e) => { setTel(e.target.value)}}/>
                    <input type="password"
                           name="password"
                           className="focus:outline-none border border-gray-300 rounded-sm py-1"
                           onChange={(e) => { setPassword(e.target.value)}}/>

                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1">회원가입 하기</button>
                    <div className="text-end text-sm">이미 회원이신가요? <a href="/login" className="text-blue-600 font-bold text-lg">로그인 하기</a></div>
                </form>
            </div>
        </div>

    );
}

export default SignupPage;