<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Anotações</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8">
            <h4>Filtros:</h4>
            <div class="row">
                <div class="col-md-6">
                    <label>Anotaçao</label>
                    <input type="text" class="form-control" name="body" placeholder="Digite um trecho da anotação">
                </div>
                <div class="col-md-3">
                    <label>Status</label>
                    <select class="form-control">
                        <option>Em Progresso</option>
                        <option>Pendente</option>
                        <option>Concluído</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label>Data de Criação:</label>
                    <input type="date" class="form-control" name="created_at">
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row"> 
                <h4>Ações:</h4>
                <div class="row">
                    <div class="d-flex justify-content-evenly mt-4">
                        <button class="btn btn-primary">Inserir</button>
                        <button class="btn btn-secondary">Pesquisar</button>
                        <button class="btn btn-success">Exportar</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <table class="table table-dark table-hover mt-3">
                <thead>
                    <tr>
                        <th>Cod.</th>
                        <th>Anotação</th>
                        <th>Status</th>
                        <th>Data de Criação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td class="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa commodi nesciunt.
                            Tempora, quod. Voluptatem asperiores nihil, soluta tenetur veritatis recusandae error
                            perferendis
                            mollitia quidem velit modi, autem eligendi fuga? </td>
                        <td>Pendente</td>
                        <td>10/05/2023</td>
                        <td>
                            <button class="btn btn-primary">Editar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotesList"
}
</script>

<style></style>