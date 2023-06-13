<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <hr>
        <div class="componentes">
            <usuario-info />
            <usuario-editar />
        </div>
    </div>
</template>

<script>
import UsuarioInfo from './UsuarioInfo'
import UsuarioEditar from './UsuarioEditar'

export default {
    components: { UsuarioInfo, UsuarioEditar }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
