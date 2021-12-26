# ToDo



### 1. useRouter

🔹 특정 조건이 만족한 경우, 즉 동적으로 라우팅이 필요할 때 사용

``` 예시
const router=useRouter()

//생략

router.history.push("/들어갈 주소")
```





### 2. 다른 컴포넌트에서 useState값을 받아올 때

```App.js
import { useState } from 'react';
import Temp from './component'

function App() {
	const [test, setTest]=useState('');
	
	return(
		<>
			<Temp test={test} />
		</>
	)
}
export default App;
```

```Temp.js
import { useState } from 'react';

function Temp({test}) {
	const [num, setNumber]=useState(test);
	
	const onChange=(event)=>{
		const value=event.target.value;
		setNumber(value)
	}
	
	// form이 있는 경우, form이 submit 될 때, test의 값이 App.js에 반영되길 바란다면
	// setTest를 props로 받아오고, submit이 이루어지는 함수에 setTest(num) 해주면 됨
	return(
		<>
			<input  name="number"
                    type="test"
                    placeholder="숫자"
                    value={test}
                    onChange={onChange}
                    required />
		</>
	)
}
```

