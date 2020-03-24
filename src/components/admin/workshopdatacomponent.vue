<template>
<el-table :data="tableData.filter(data => !search || data.Name.toLowerCase().includes(search.toLowerCase()))">
    <el-table-column label="Workshop" prop="Name">
    </el-table-column>

    <el-table-column label="Beschrijving">
        <template slot-scope="scope">
            <read-more more-str="lees meer" :text='showDesc(scope.row)' link="#" less-str="lees minder" :max-chars="25"></read-more>
        </template>
    </el-table-column>

    <el-table-column label="Video link" prop="WorkshopVideos[0].VideoUrl">
    </el-table-column>

    <el-table-column align="right">
        <template slot-scope="scope" slot="header" @click="handleEdit(scope.$index, scope.row)">
            <el-input v-model="search" size="mini" icon="search" placeholder="Workshop zoeken.." />
        </template>
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Bijwerken</el-button>
            <el-button size="mini" type="danger" v-on:click="handleDelete(scope.$index, scope.row)">Verwijderen</el-button>
        </template>
    </el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        let workshopId;
        return {
            tableData: '',
            search: '',
            Descdialog: false,
            URLdialog: false
        }
    },
    methods: {
        handleEdit(index) {
            this.$dao.getIdWorkshop(index, localStorage.getItem('token'), (message, result) => {
                if (message === 'SUCCESS') {
                    console.log(result)
                    this.workshopId = result
                    document.location.assign('/inschrijfsysteem/admin/dashboard/workshops/aanpassen/' + this.workshopId);
                } else {
                    this.workshopId = 'ERROR'
                }
            })
        },
        handleDelete(index) {
            console.log('delete aangeroepen')
            this.$dao.getIdWorkshop(index, localStorage.getItem('token'), (message, result) => {
                if (message === 'SUCCESS') {
                    if(confirm("Weet je zeker dat je deze workshop wilt verwijderen?")){
                    this.$dao.deleteWorkshop(result, localStorage.getItem('token'), (message, callback) => {
                        if(message === 'SUCCESS') {
                            window.location.reload()
                        } 
                    });
                    }
                } else {
                    this.workshopId = 'ERROR'
                }
            })
        },
        handleUrl(index, row) {
            alert('Delete button aangeroepen op positie ' + index + ' van Workshop ' + row.workshop)
        },
        showDesc(row) {
            return row.Description
        }
    },

    created() {
        this.$dao.getAllWorkshopsCallback(localStorage.getItem('token'), (message, result) => {
            if (message === 'SUCCESS') {
                this.tableData = result
            } else {
                this.tableData = null
            }
        })
    }

}
</script>
