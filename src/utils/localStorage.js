const getStoredCategories = () =>{
    const storedCategory = localStorage.getItem('categories');
    if(storedCategory){
        return JSON.parse(storedCategory);
    }
    return [];
}


const saveCategories = id =>{
    const storedCategories = getStoredCategories();
    const exists = storedCategories.find(jobId => jobId === id);
    if(!exists){
        storedCategories.push(id);
        localStorage.setItem('categories', JSON.stringify(storedCategories))
    }
}

export { getStoredCategories, saveCategories}