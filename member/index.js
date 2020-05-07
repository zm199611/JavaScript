var members = [
    {
        avatar: 'https://user-gold-cdn.xitu.io/2020/3/18/170ebe011a0cc92a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 1314,
        name: '彭于晏',
        phone: 18296884867,
        hometown: '台湾'
    },
    {
        avatar: 'https://user-gold-cdn.xitu.io/2020/2/16/1704eb3ba1262f12?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 520,
        name: '古天乐',
        phone: 18779702375,
        hometown: '香港'
    },
    {
        avatar: 'https://user-gold-cdn.xitu.io/2020/1/23/16fd033e94959e97?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 511,
        name: '吴彦祖',
        phone: 11264588523,
        hometown: '香港'
    }
];
var tbody = document.querySelector('#member tbody');
var localData = JSON.parse(localStorage.getItem('members')) || [];
var members = localData;
render();
var submit = document.querySelector('.submit');
function addItem(event) {
    event.preventDefault();
    var input = document.querySelector('[type="text"]');
    // console.log(input);
    var info;
    members.push(info);
    localStorage.setItem('members', JSON.stringify(members));
    render();
}
// 
// tbody.innerHTML = 
// console.log(members);
function render() {
    tbody.innerHTML = members.map(function (member) {
        return "\n            <tr>\n            <th>" + member.id + "<th/>\n            <th>" + member.name + "<th/>\n            <th>" + member.phone + "<th/>\n            <th>" + member.hometown + "<th/>\n\n            </tr>\n            <img src =\"" + member.avatar + "\"/>\n        ";
    }).join(""); //将字符串变成HTML的数组
}
submit.addEventListener('submit', addItem);
