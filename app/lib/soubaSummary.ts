// /souba/ ハブの一覧表のデータ。各ブランドページの実売データから機械的に抽出している（手で書いていない）。
// topMax＝そのブランドで最も高かった単品落札価格（カテゴリ別の行のうち最大）。fetchedAt＝各ページの取得日。
export interface SoubaSummary { slug: string; name: string; cats: string[]; topCat: string; topMax: string; fetchedAt: string }
export const SOUBA_SUMMARY: SoubaSummary[] = [
  {
    "slug": "dior",
    "name": "ディオール",
    "cats": [
      "レディディオール",
      "サドルバッグ",
      "ブックトート",
      "財布"
    ],
    "topCat": "レディディオール",
    "topMax": "550,000円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "fendi",
    "name": "フェンディ",
    "cats": [
      "バゲット",
      "ピーカブー",
      "財布",
      "バッグ"
    ],
    "topCat": "バッグ",
    "topMax": "898,000円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "bottega-veneta",
    "name": "ボッテガ・ヴェネタ",
    "cats": [
      "イントレチャート",
      "カセット",
      "財布",
      "バッグ"
    ],
    "topCat": "イントレチャート",
    "topMax": "441,100円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "loewe",
    "name": "ロエベ",
    "cats": [
      "パズル",
      "ハンモック",
      "アナグラム",
      "財布"
    ],
    "topCat": "ハンモック",
    "topMax": "715,660円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "saint-laurent",
    "name": "サンローラン",
    "cats": [
      "バッグ",
      "財布",
      "ライダース",
      "ケイト"
    ],
    "topCat": "バッグ",
    "topMax": "459,600円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "balenciaga",
    "name": "バレンシアガ",
    "cats": [
      "バッグ",
      "財布",
      "トリプルS",
      "シティ"
    ],
    "topCat": "バッグ",
    "topMax": "430,116円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "goyard",
    "name": "ゴヤール",
    "cats": [
      "サンルイ",
      "財布",
      "カードケース",
      "バッグ"
    ],
    "topCat": "サンルイ",
    "topMax": "550,000円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "bvlgari",
    "name": "ブルガリ",
    "cats": [
      "ビーゼロワン",
      "ネックレス",
      "リング",
      "時計"
    ],
    "topCat": "ネックレス",
    "topMax": "1,005,400円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "tag-heuer",
    "name": "タグホイヤー",
    "cats": [
      "カレラ",
      "アクアレーサー",
      "モナコ",
      "フォーミュラ1"
    ],
    "topCat": "カレラ",
    "topMax": "999,900円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "grand-seiko",
    "name": "グランドセイコー",
    "cats": [
      "スプリングドライブ",
      "クオーツ",
      "メカニカル",
      "ヘリテージ"
    ],
    "topCat": "スプリングドライブ",
    "topMax": "1,405,000円",
    "fetchedAt": "2026年9月13日"
  },
  {
    "slug": "hermes",
    "name": "エルメス",
    "cats": [
      "バーキン",
      "ケリー",
      "財布",
      "スカーフ（カレ）",
      "バーキン25",
      "バーキン30",
      "バーキン35",
      "バーキン40"
    ],
    "topCat": "バーキン",
    "topMax": "4,015,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "louis-vuitton",
    "name": "ルイヴィトン",
    "cats": [
      "バッグ",
      "財布",
      "モノグラム（ライン全体）",
      "モノグラム 財布",
      "ダミエ 財布",
      "モノグラム バッグ",
      "ダミエ バッグ",
      "ネヴァーフル",
      "スピーディ"
    ],
    "topCat": "バッグ",
    "topMax": "1,300,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "chanel",
    "name": "シャネル",
    "cats": [
      "マトラッセ",
      "バッグ全体",
      "財布",
      "マトラッセ 25",
      "マトラッセ 23",
      "ミニマトラッセ",
      "マトラッセ 財布"
    ],
    "topCat": "バッグ全体",
    "topMax": "1,280,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "rolex",
    "name": "ロレックス",
    "cats": [
      "デイトナ",
      "サブマリーナ",
      "デイトジャスト",
      "エクスプローラー",
      "デイトナ 116500",
      "サブマリーナ 126610",
      "サブマリーナ 116610",
      "サブマリーナ 16610"
    ],
    "topCat": "デイトナ",
    "topMax": "7,200,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "omega",
    "name": "オメガ",
    "cats": [
      "スピードマスター",
      "シーマスター",
      "コンステレーション"
    ],
    "topCat": "スピードマスター",
    "topMax": "4,851,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "gucci",
    "name": "グッチ",
    "cats": [
      "バッグ",
      "財布"
    ],
    "topCat": "バッグ",
    "topMax": "167,555円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "prada",
    "name": "プラダ",
    "cats": [
      "バッグ",
      "財布"
    ],
    "topCat": "バッグ",
    "topMax": "147,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "celine",
    "name": "セリーヌ",
    "cats": [
      "バッグ",
      "財布"
    ],
    "topCat": "バッグ",
    "topMax": "148,000円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "tiffany",
    "name": "ティファニー",
    "cats": [
      "ネックレス",
      "リング",
      "ブレスレット"
    ],
    "topCat": "ネックレス",
    "topMax": "273,800円",
    "fetchedAt": "2026年8月17日"
  },
  {
    "slug": "cartier",
    "name": "カルティエ",
    "cats": [
      "時計",
      "リング",
      "ネックレス"
    ],
    "topCat": "ネックレス",
    "topMax": "810,637円",
    "fetchedAt": "2026年8月17日"
  }
];
