// ::::::Find unique item::::::


const items = [
    {id: 1, title: 'Working with objects', group: 'js'},
    {id: 2, title: 'Create fancy cards', group: 'css'},
    {id: 3, title: 'Async programing', group: 'js'},
    {id: 4, title: 'Handle svg tags is HTML', group: 'html'},
    {id: 5, title: 'this keyword', group: 'js'},
    {id: 6, title: 'Input types', group: 'html'},
    {id: 7, title: 'Make network requests', group: 'js'}
]

const fillItemsBasedGroupName = (items) => {
    let results = {}
    let uniqueItem = {}
    items.forEach(item => {
        if (item.group in results) {
            results[item.group].push(item)
        } else {
            results[item.group] = [item]
        }
    });
    for (const obj in results) {
        if (results[obj].length === 1) {
            uniqueItem[obj] = results[obj]
        }
    }
    return uniqueItem

}

function findUniqueGroups(items) {
// شمارش تعداد دفعات تکرار هر گروه
    const groupCounts = new Map();
    items.forEach(item => {

        const count = groupCounts.get(item.group) || 0;
        groupCounts.set(item.group, count + 1);
    });

// پیدا کردن گروههایی که تنها یک بار تکرار شدهاند
    const uniqueGroups = new Set();

    groupCounts.forEach((group, count)=> {
        if (count === 1) {
            uniqueGroups.add(group);
        }
    })

// // فیلتر کردن آرایه برای پیدا کردن عناصر با گروههای منحصر به فرد
    return items.filter(item => uniqueGroups.has(item.group));
}


const uniqueGroupItems = findUniqueGroups(items);
console.log(uniqueGroupItems);
