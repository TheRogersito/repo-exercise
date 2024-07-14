import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.reader

const summary = Summary.winsAnalysisHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)