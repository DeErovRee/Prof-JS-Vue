Vue.component('searchline', {
    template: `
            <form action="#" class="search-form">
                <input type="text" class="search-field" v-model="$root.userSearch" @input="$root.filter">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
})