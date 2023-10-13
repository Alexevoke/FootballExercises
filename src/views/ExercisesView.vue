<template>
    <div class="container">
        <div class="row margintop">
            <div class="col">
                <div class="card mb-4">
                    <div class="card-header hover" v-on:click="toggleFilter = !toggleFilter">
                        <div class="row">
                            <div class="col flexheader">
                                <h5 class="card-title">Look Up Exercises</h5>
                                <i :class="toggleIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" v-show="toggleFilter">
                        <div class="row baseline">
                            <div class="col-4 flexbody flexend height">
                                <h6>Exercise name</h6>
                                <h6>Focus</h6>
                                <h6>Theme</h6>
                                <h6>Subtheme</h6>
                                <h6>Age group</h6>
                                <h6>Target</h6>
                                <h6>Filetype</h6>
                            </div>
                            <div class="col flexbody height">
                                <input type="text" class="form-control form-control-sm">
                                <input type="text" class="form-control form-control-sm">
                                <select v-model="theme" class="form-select form-select-sm">
                                    <option v-for="theme in themes" :value="theme">{{ theme }}</option>
                                </select>
                                <select class="form-select form-select-sm"></select>
                                <select class="form-select form-select-sm"></select>
                                <select class="form-select form-select-sm"></select>
                                <select class="form-select form-select-sm"></select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row margintop">
            <div class="col">
                <div class="flex">
                    <h6>Result size</h6>
                    <select v-model="size" class="form-select form-select-sm">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <ExerciseTable :list-data="exercises" :size="parseInt(size)"></ExerciseTable>
            </div>
        </div>
    </div>
</template>

<script>
import ExerciseTable from '../components/ExerciseTable.vue';

export default {
    data() {
        return {
            baseUrl: "http://localhost:5192/api/",
            exercises: [],
            filteredExercises: [],
            themes: [],
            theme: "Select a theme...",
            toggleFilter: true,
            size: 2
        };
    },
    computed: {
        toggleIcon() {
            if (this.toggleFilter) {
                return "bi bi-dash-square";
            }
            else {
                return "bi bi-caret-down-square-fill";
            }
        }
    },
    async created() {
        const url = this.baseUrl + "Exercise";
        const response = await axios.get(url);
        this.exercises = response.data;
        console.log(this.exercises);

        // this.focuspoints = Array.from(new Set(this.exercises.map((exercise) => exercise.focusPoints)))
        // console.log(this.focuspoints)
        this.themes = Array.from(new Set(this.exercises.map((exercise) => exercise.skills)))
        console.log(this.themes)
    },
    components: { ExerciseTable }
}

</script>

<style scoped>
.height{
    height: 20em;
}
.flex{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
}
.flexbody{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
}
.flexheader{
    display: flex;
    justify-content: space-between;
}
.flexend{
    align-content: flex-end;
}
.baseline{
    align-items: baseline;
}
.margintop{
    margin-top: 1em;
}
h6{
    margin: 0px;
    height: 33px;
}
.bi-dash-square{
    color: red;
}
.bi:hover{
    cursor: pointer;
}
.hover:hover{
    cursor: pointer;
}
.form-select{
    width: auto;
    border: 2px solid var(--bs-border-color)
}
.form-control{
    width: auto;
    border: 2px solid var(--bs-border-color)
}
</style>