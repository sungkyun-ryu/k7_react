import boxdata from './BoxOffice.json'

export default function BoxOffice() {
  const dailyList = boxdata.boxOfficeResult.dailyBoxOfficeList;

  const mNames = dailyList.map(item =>
    <ul key={item.movieCd}>
      {item.rank}. {item.movieNm} 
    </ul>)

  return (
    <div>
      {mNames}
    </div>
  )
}
