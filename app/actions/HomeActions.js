import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'searchSummonerSuccess',
      'searchSummonerFail',
      'updateSummonerName',
      'invalidSummonerName',
      'updateRegion',
      'setSelectedChampionData',
      'changeSeason',
      'switchMainScreen'
    );
  }

  searchSummoner(summonerName, region) {
    $.ajax({
      type: 'POST',
      url: '/searchSummoner',
      data: { summonerName: summonerName, region: region }
    })
      .done((data) => {
        this.actions.searchSummonerSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.searchSummonerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);