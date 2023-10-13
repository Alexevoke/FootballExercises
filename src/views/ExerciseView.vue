<template>
    <div class="container">
        <div class="row margintop">
            <div class="col">
                <RouterLink to="/exercises" class="btn btn-danger"><i class="bi bi-arrow-left"></i> Back</RouterLink>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h4>Exercise Info</h4>
            </div>
        </div>
        <div class="row baseline">
            <div class="col flex flexend">
                <h6>Name</h6>
                <h6>Focus</h6>
                <h6>Theme</h6>
                <h6>Subtheme</h6>
                <h6>Organization</h6>
                <h6>Materials</h6>
                <h6>Suitability</h6>
                <h6>Age group</h6>
            </div>
            <div class="col flex">
                <p>{{ exercise.name }}</p>
                <p>{{ exercise.focusPoints }}</p>
                <p>{{ exercise.skills }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            baseUrl: "http://localhost:5192/api/",
            exercise: {},
        }
    },
    props: [
        'id'
    ],
    async created() {
        const url = this.baseUrl + "Exercise/" + this.id;
        console.log(url)
        const response = await axios.get(url);
        this.exercise = response.data;
        console.log(this.exercise)
    }
}
</script>

<style scoped>
.margintop{
    margin-top: 1em;
}
.baseline{
    align-items: baseline;
}
.flex{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

}
.flexend{
    align-content: flex-end;
}

p{
    margin: 0px 0px 8px;
    height: 19.2px
}
</style>