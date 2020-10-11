 <template>
    <div class="searchWraper">
        <h1>Find the perfect image for your next creative project</h1>

        <div class="searchBarWrapper">
            <button id="SearchButton">Search</button>
            <input type="text" name="searchBar" id="searchBar">
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    name: 'SearchSection'
}
</script>

<style>
.searchWraper{
    background-color:#e3e3e3;
    width: 100%;
}

.searchWraper > h1{
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
}

.searchBarWrapper{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 3rem;
    height: 3rem;
    position: relative;
}

#searchBar{
    all: unset;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 8rem;
}


#SearchButton{
    all: unset;
    position: absolute;
    box-sizing: border-box;
    margin-left: auto;
    font-size: 1.3rem;
    font-weight: 500;
    left: 2rem;
    line-height: 3rem;
}


</style>