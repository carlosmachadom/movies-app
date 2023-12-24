import { $ } from "@utils/dom/selectors";

export default async function getSearchValue() {
    let finalValue = null;
    const regex = /^[a-zA-Z0-9áéíóúüÜñÑ.,:;'"!¡¿?()\s-]*$/;

    const searchValue = $(".search-contaner form > label input[type=text]").value;

    if (searchValue != "" && searchValue.match(regex)) {
        finalValue = searchValue;
    }

    return finalValue;
}