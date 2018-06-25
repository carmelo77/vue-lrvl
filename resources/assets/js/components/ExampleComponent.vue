<template>
    <div>
        <h2 class="text-center">Captura tus ideas</h2>
        <div class="well">
            <h4>¿En que estás pensando?</h4>
            <form>
                <div class="input-group">
                    <input type="text" class="form-control input-sm" v-model="name" maxlength="256">
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary btn-sm" @click.prevent="store()">
                            Agregar
                        </button>
                    </span>
                </div>        
            </form>
            <hr>
            <ul class="list-unstyled">
                <li v-for="idea in ideas" :key="idea.id">                    
                    <p>
                        <small class="text-muted"><em>{{ since(idea.created_at) }}</em></small> 
                        {{ idea.description }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import toastr from 'toastr';
import moment from 'moment';

    moment.lang('es');

    export default {

        data() {
            return {
                ideas: [],
                name: '',
                url: 'mis-ideas',
            }
        },

        created() {
            this.index();
        },

        methods: {
            index() {
                axios.get(this.url)
                    .then(response => {
                        this.ideas = response.data
                    });
            },

            since(date) {
                return moment(date).fromNow();
            },

            store() {
                axios.post(this.url, {description: this.name})
                    .then(response => {
                        this.name = "";
                        toastr.success(response.data.success);
                        this.index();
                    });
            }
        }
    }
</script>
