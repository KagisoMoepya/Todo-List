const list_name = document.getElementById('list_name')
const list_items = document.getElementById('list_items')

window.addEventListener('load', (e) => {

    if(!('list_names' in localStorage)) return localStorage.setItem('list_names', '')
    
    let current_names_list = localStorage.getItem('list_names').split(',')
    
    if(current_names_list[0] === '') current_names_list.shift()
    
    current_names_list.map(name => {
        createListItem(name)
    })
    
    if(!('active_list' in localStorage)) return localStorage.setItem('active_list', '')
    returnActiveList()

})

list_name.addEventListener('keyup', (e) => {

    if(e.key === 'Enter' && e.target.value !== '') {
        const target = e.target.value.toLowerCase()

        renewlocalStorage(target)
        
        return list_name.value = ''
    }

})

function renewlocalStorage(value) {
    let old_names_list = localStorage.getItem('list_names').split(',')
    let new_names_list = [...old_names_list]
    
    if(old_names_list[0] === '') old_names_list.shift()

    new_names_list.push(value)
    localStorage.setItem('list_names', new_names_list)
    createListItem(value)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeListSelectable(list_item_wrapper) {
    list_items.addEventListener('click', e => {

        if(list_item_wrapper === e.target) {
            list_item_wrapper.classList.add('active')
            localStorage.setItem('active_list', list_item_wrapper.outerHTML)

        } else if(list_item_wrapper.classList.contains('active')) {
            list_item_wrapper.classList.remove('active')
        }

    })
}

function returnActiveList() {
    const list_item_wrapper = new DOMParser().parseFromString(localStorage.getItem('active_list'), "text/xml")
    const list_name_selector = list_item_wrapper.querySelector('.list_name_selector')
    const selector_text = list_name_selector.textContent
    const data_order = list_item_wrapper.querySelector('div').getAttribute('data-order')

    list_items.querySelectorAll('.list_item_wrapper').forEach(list_item => {
        
        if(list_item.getAttribute('data-order') === data_order) {
            list_item.classList.add('active')
        }

    })
}

function createListItem(value) {
    const list_len = list_items.querySelectorAll('.list_item_wrapper').length + 1
    const new_list_item_wrapper = document.createElement('div')
    const new_list_circle = document.createElement('div')
    const new_list_name_selector = document.createElement('div')

    new_list_item_wrapper.setAttribute('class', 'list_item_wrapper')
    new_list_item_wrapper.setAttribute('data-order', list_len)
    new_list_circle.setAttribute('class', 'list_circle')
    new_list_name_selector.setAttribute('class', 'list_name_selector')

    new_list_name_selector.textContent = capitalizeFirstLetter(value)
    new_list_item_wrapper.appendChild(new_list_circle)
    new_list_item_wrapper.appendChild(new_list_name_selector)

    makeListSelectable(new_list_item_wrapper)
    list_items.appendChild(new_list_item_wrapper)
}