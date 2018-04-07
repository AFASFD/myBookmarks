
//初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//生成键盘
generateKeyboard(keys, hash)

//监听用户键盘操作
listenUser(hash)



//******私有函数*******

function init() {
    var keys = {
        '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        'length': 3
    }
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        't': 'taobao.com',
        'z': 'zhihu.com'
    }
    return {
        'keys': keys,
        'hash': hash
    }
}

function getFormLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || null)
}

function tag(tagName) {
    return document.createElement(tagName)
}

function creatSpan(textContent) {
    var span = document.createElement('span')
    span.textContent = textContent
    span.className = 'text'
    return span
}

function creatImage(domain) {
    var img = document.createElement('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = 'https://i.loli.net/2018/04/06/5ac728d851969.png'
    }
    img.onerror = function (xxx) {
        xxx.target.src = 'https://i.loli.net/2018/04/06/5ac728d851969.png'
    }
    return img
}

function creatButton(id) {
    var button = document.createElement('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function (aaaa) {
        var btn = aaaa['target']
        var key = aaaa['target']['id']
        var img = btn.previousSibling
        x = prompt('给我一个网址')
        hash[key] = x;
        localStorage.setItem('zzz', JSON.stringify(hash))
        img.src = 'http://' + x + '/favicon.ico'
        img.onerror = function (xxx) {
            xxx.target.src = 'https://i.loli.net/2018/04/06/5ac728d851969.png'
        }
    }
    return button
}

function generateKeyboard(keys, hash) {
    //获取缓存数据
    var hashLocal = getFormLocalStorage('zzz')
    if (hashLocal) {
        hash = hashLocal
    }
    //生成键盘
    for (var index = 0; index < keys['length']; index++) {
        var row = keys[index]
        var div = tag('div')
        wrapper.appendChild(div)
        //遍历row
        for (var index2 = 0; index2 < row['length']; index2++) {

            var span = creatSpan(row[index2])

            var img = creatImage(hash[row[index2]])

            var button = creatButton(row[index2])

            var kbd = tag('kbd')
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)
        }
    }
}

function listenUser(hash) {
    //获取缓存数据
    var hashLocal = getFormLocalStorage('zzz')
    if (hashLocal) {
        hash = hashLocal
    }
    document.onkeypress = function (ssss) {
        var key = ssss['key']
        if (hash[key] == undefined || hash[key] == '') {
            alert('还未设置当前快捷键')
        } else {
            var web = 'http://' + hash[key]
            window.open(web, '_blank')
        }
    }
}