<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Exercise</th>
                <th scope="col">Theme</th>
                <th scope="col">Focus</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="exercise in paginatedData" :key="exercise.exerciseNumber">
                <td scope="row"><img src="big_line_nep_nep_stickers_neptune_35.png"></td>
                <td class="align-middle">
                    <RouterLink :to="{name: 'exercise', params: {id: exercise.exerciseNumber}}">
                        {{ exercise.name }}
                    </RouterLink>
                </td>
                <td class="align-middle">{{ exercise.skills }}</td>
                <td class="align-middle">{{ exercise.focusPoints }}</td>
            </tr>
        </tbody>
    </table>
    <div class="flex">
        <nav aria-label="Table navigation">
            <ul class="pagination">
                <li class="page-item" :class="{disabled: pageNumber == 0}"><button class="page-link" v-on:click.prevent="previousPage" :disabled="pageNumber == 0">Previous</button></li>
                <li class="page-item" v-for="(n,index) in pageCount" :class="{active: pageNumber == index}"><button class="page-link" v-on:click="selectPage(index)">{{ n }}</button></li>
                <li class="page-item" :class="{disabled: pageNumber >= pageCount - 1}"><button class="page-link" v-on:click.prevent="nextPage" :disabled="pageNumber >= pageCount - 1">Next</button></li>
            </ul>
        </nav> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageNumber: 0
        }
    },
    props:{
        listData:{
            type: Array,
            required: true
        },
        size:{
            type: Number,
            required: false,
        }
    },
    computed: {
        pageCount() {
            let length = this.listData.length
            let size = this.size
            this.pageNumber = 0
            console.log(Math.ceil(length/size))
            return Math.ceil(length/size)
        },
        paginatedData() {
            const start = this.pageNumber * this.size
            const end = start + this.size
            console.log(start)
            console.log(end)

            return this.listData.slice(start, end)
        }

    },
    methods:{
        nextPage() {
            this.pageNumber++
            console.log(this.pageNumber)
        },
        previousPage() {
            this.pageNumber--
            console.log(this.pageNumber)
        },
        selectPage(page) {
            this.pageNumber = page
            console.log(this.pageNumber)
        }
    }
}

</script>

<style scoped>
img {
    max-height: 10em;
    width: 10em;
    height: auto;
}
a {
    text-decoration: none;
    color: red;
}
a:hover{
    text-decoration: underline;
}
.flex{
    display: flex;
    justify-content: center;
}
</style>