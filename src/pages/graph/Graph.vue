<template src='./graph.html'>

</template>
<style scoped src='./graph.css'>

</style>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue';
import { useUserStore } from '../../lib/store';

export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },

    data() {
        return {
            attendances: [],
            today: null,
            past: null,
            graph: null,
        };
    },

    methods: {
        // Not my proudest code, but hey, it works
        async extractGraphData(lookbackDays) {
            let dates = [];
            let checkinsOnDate = [];

            this.today = new Date();
            this.past = new Date();

            this.past.setDate(this.today.getDate() - lookbackDays);
            await this.getAttendances();

            for (let i = this.past; i.getTime() <= this.today.getTime(); i.setDate(i.getDate() + 1)) {
                let dayOfMonth = i.getDate();
                let counter = 0;

                for (let j = 0; j < this.attendances.length; j++) {

                    let checkInDate = new Date(this.attendances[j].checkIn).getDate()

                    if (checkInDate == dayOfMonth) {
                        counter++;
                    }
                }

                dates.push(dayOfMonth)
                checkinsOnDate.push(counter)
            }

            return [dates, checkinsOnDate]
        },

        async getAttendances() {
            const response = await axios.get(`https://zsatservice.azurewebsites.net/api/Attendances/Filter?startDate=${this.past.toISOString()}&endDate=${this.today.toISOString()}`);
            this.attendances = await response.data;
        },

        async getGraph(lookbackDays = 6, graphType = "line") {
            let data = await this.extractGraphData(lookbackDays);
            let str =
                `
            https://quickchart.io/chart?chart={
                                                type: 'line',
                                                data: {
                                                labels: [${data[0]}],
                                                datasets: [{
                                                label: 'Checkins',
                                                data: [${data[1]}],
                                                fill: true}]
                                               }}&width=400&height=170&format=svg`;
            const response = await axios.get(str);
            this.graph = await response.data;
        },
    },

    async mounted() {
        this.getGraph();
    },

    components: {
        Navbar
    },

    computed: {
        svgCode() {
            return this.graph;
        }
    },
};
</script>