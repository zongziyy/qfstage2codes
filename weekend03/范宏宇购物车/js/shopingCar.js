var _this
class ShopingCar {
    constructor(controlBox) {
        // 保存全局中的this
        _this = this
        this.ctrlbox = document.querySelector(controlBox)
        // 全局的add button增加商品数量按钮
        this.addBtn = this.ctrlbox.querySelectorAll('.add')
        // 全局的删除 button 商品数量按钮
        this.deleteBtn = this.ctrlbox.querySelectorAll('.delete')
        // 获取全部选择按钮
        this.selectAll = this.ctrlbox.querySelector('.check-all')
        // 获取子选择按钮
        this.selectSons = this.ctrlbox.querySelectorAll('.check-one')
        // 删除已选中的商品
        this.deleteAll = this.ctrlbox.querySelector('#deleteAll')
        // 初始化所有点击事件
        this.init()
    }

    // 初始化所有事件
    init() {
        this.addBtn.forEach(el => el.addEventListener('click', this.commodityAdd));
        this.deleteBtn.forEach(el => el.addEventListener('click', this.commodityRemove))
        this.selectAll.addEventListener('click', this.checkedAll)
        this.selectSons.forEach(el => el.addEventListener('click', this.checkeOne));
        this.deleteAll.addEventListener('click', this.removeSelectCommodity)
    }

    // 点击增加
    commodityAdd() {
        // 获取父级元素的tr
        let parentNode = this.parentNode.parentNode
        let count = parentNode.querySelector('.count-input').value
        count++
        if (this.value == 1) {
            parentNode.querySelector('.reduce').innerText = ''
        } else {
            parentNode.querySelector('.reduce').innerText = '-'
            parentNode.querySelector('.reduce').addEventListener('click', function () {
                if (count == 1) {
                    parentNode.querySelector('.reduce').innerText = ''
                    return
                }
                count--
                parentNode.querySelector('.reduce').innerText = count == 1 ? '' : '-'
                parentNode.querySelector('.count-input').value = count
                let price = Number(parentNode.querySelector('.price').innerHTML);
                parentNode.querySelector('.subtotal').innerText = (price * count).toFixed(2)
            })
        }
        parentNode.querySelector('.count-input').value = count
        let price = Number(parentNode.querySelector('.price').innerHTML);
        parentNode.querySelector('.subtotal').innerText = (price * count).toFixed(2)
        _this.preSettlement()
    }

    // 点击删除商品
    commodityRemove() {
        this.parentNode.parentNode.remove()
        _this.preSettlement()
    }

    // 全选
    checkedAll() {
        _this.selectSons.forEach(element => element.checked = this.checked)
        _this.preSettlement()
    }

    // 子选
    checkeOne() {
        _this.ctrlbox.querySelector('.check-all').checked = Array.from(_this.selectSons).every(el => el.checked)
        _this.preSettlement()
    }

    // 删除选择的商品
    removeSelectCommodity() {
        Array.from(_this.selectSons).filter(el => el.checked).forEach(el => el.parentNode.parentNode.remove())
        _this.preSettlement()
    }

    // 发起预结算 每次操作都要修改里面的内容
    preSettlement() {
        // 商品总计  
        document.querySelector('#selectedTotal').innerHTML = Array.from(_this.ctrlbox.querySelectorAll('.check-one')).filter(el => el.checked).map(el => Number(el.parentNode.parentNode.querySelector('.count-input').value)).reduce((a, b) => a + b,0)
        // 金额没有出错情况下计算小计即可
        document.querySelector('#priceTotal').innerText = Array.from(_this.ctrlbox.querySelectorAll('.check-one')).filter(el => el.checked).map(el => Number(el.parentNode.parentNode.querySelector('.subtotal').innerText)).reduce((a, b) => a + b,0).toFixed(2)
    }
}

new ShopingCar('.catbox')