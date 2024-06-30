export const getThemes =async() =>{

const response = await fetch("https://opentdb.com/api_category.php",{cache:"no-store"});

const result = await response.json();

return result;
}