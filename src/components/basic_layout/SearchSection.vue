 <template>
    <div class="searchWraper">
        <h1>Find the perfect image for your next creative project</h1>

        <div class="searchBarWrapper">
            <button id="SearchButton" style="background-image: url(searchIcon.svg);"></button>
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
    font-size: 1.1rem;
    font-weight: 500;
}

.searchBarWrapper{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2rem;
    height: 2.5rem;
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
    cursor: pointer;
    position: absolute;
    left: 1.2rem;
    box-sizing: border-box;
    height: 1.4rem;
    width: 1.4rem;
    top: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.4rem;
}

</style>