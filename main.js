keys={
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    'length': 3
}
hash={
    'q':'qq.com',
    'w':'weibo.com',
    't':'taobao.com',
    'z':'zhihu.com'
}
hashLocal=JSON.parse(localStorage.getItem('zzz') || null)
if(hashLocal){
    hash=hashLocal
}
index=0;
//遍历keys
while(index<keys['length']){
    row=keys[index]
    divX=document.createElement('div')
    wrapper.appendChild(divX)
    index2=0
    //遍历row
    while(index2<row['length']){
        kbdX=document.createElement('kbd')
        kbdX.textContent=row[index2]
        buttonX=document.createElement('button')
        buttonX.textContent='编辑'
        buttonX.id=row[index2]
        kbdX.appendChild(buttonX)
        divX.appendChild(kbdX)
        buttonX.onclick=function(aaaa){
            key=aaaa['target']['id']
            x=prompt('给我一个网址')
            hash[key]=x;
            localStorage.setItem('zzz',JSON.stringify(hash))
        }
        index2++
    }


    index++
}
document.onkeypress=function(ssss){
    key=ssss['key']
    if(hash[key]==undefined || hash[key]==''){
        alert('还未设置当前快捷键')
    }else{
        web='http://'+hash[key]
        window.open(web,'_blank')
    }
}