// console.log('hello member');
// 如何让不严谨的数据守规矩
// 接口
interface membersEntity{
    avatar:string;
    id:number;
    name:string;
    phone:number;
    hometown:string;
}

const members: membersEntity[] = [
{
    avatar:'https://user-gold-cdn.xitu.io/2020/3/18/170ebe011a0cc92a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:1314,
    name:'彭于晏',
    phone:18296884867,
    hometown:'台湾'

},
{
    avatar:'https://user-gold-cdn.xitu.io/2020/2/16/1704eb3ba1262f12?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:520,
    name:'古天乐',
    phone:18779702375,
    hometown:'香港'
},
{
    avatar:'https://user-gold-cdn.xitu.io/2020/1/23/16fd033e94959e97?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:511,
    name:'吴彦祖', 
    phone:11264588523,
    hometown:'香港'
}
]




    const tbody = document.querySelector('#member tbody');
    let localData = JSON.parse(localStorage.getItem('members')) || [];   
    let members = localData; 
    render();               
    const submit = document.querySelector('.submit')
    function addItem(event) {
      event.preventDefault();
      const input = document.querySelector('[type="text"]');
      // console.log(input);
      let info: {
        text: Element;
        done: Boolean;
    }
      members.push(info);
      localStorage.setItem('members', JSON.stringify(members))
      render();
    }
    // 
// tbody.innerHTML = 
// console.log(members);
function render() {
tbody.innerHTML = members.map((member) =>{

        return `
            <tr>
            <th>${member.id}<th/>
            <th>${member.name}<th/>
            <th>${member.phone}<th/>
            <th>${member.hometown}<th/>

            </tr>
            <img src ="${member.avatar}"/>
        `
    }).join("")//将字符串变成HTML的数组
}
    submit.addEventListener('submit', addItem)
    