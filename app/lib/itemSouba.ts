// 品目別ガイド用の実売相場データ。
// wallet: 各ブランドの /souba/ ページ掲載値をそのまま転記(取得日は各ページ記載)。
// shoes: 2026-09-22 取得(aucfan集計+ヤフオク落札実績。まとめ売り・他ブランド混入・バッグ等の誤ヒットを除外し単品出品の最高値を採用)。

export type ItemSoubaRow = {
  brand: string;
  slug: string | null; // /souba/{slug}/ が存在する場合のみ
  category: string;
  count: string;
  avg: string;
  max: string;
  maxNote: string | null;
  sourceUrl: string;
  fetchedAt: string;
};

export const WALLET_SOUBA: ItemSoubaRow[] = [
  { brand: "バレンシアガ", slug: "balenciaga", category: "財布", count: "116件（直近30日）", avg: "7,982円", max: "99,000円", maxNote: "グッチ×バレンシアガ ザ ハッカープロジェクト コンチネンタルウォレット（中古・単品出品）。これを上回る落札は複数ブランドのまとめ売りのため除外。落札日2026年7月18日", sourceUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "ボッテガ・ヴェネタ", slug: "bottega-veneta", category: "財布", count: "407件（直近30日）", avg: "15,420円", max: "159,800円", maxNote: "イントレチャート ジップウォレット 長財布（新品・単品出品）。これを上回る落札は複数ブランドの財布まとめ売りのため除外。落札日2026年8月6日", sourceUrl: "https://aucfan.com/intro/q-~a5dca5c3a5c6a5aca5f4a5a7a5cda5bf20bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "セリーヌ", slug: "celine", category: "財布", count: "310件", avg: "24,722円", max: "148,000円", maxNote: null, sourceUrl: "https://aucfan.com/search1/q-~a5bba5eaa1bca5cc20bae2c9db/s-ya/", fetchedAt: "2026年8月17日" },
  { brand: "シャネル", slug: "chanel", category: "マトラッセ 財布", count: "137件（直近30日）", avg: "34,059円", max: "377,245円", maxNote: "マトラッセ チェーンウォレット ラムスキン 31番台（未使用・単品出品）。落札日2026年7月9日", sourceUrl: "https://aucfan.com/intro/q-~a5b7a5e3a5cda5eb20a5dea5c8a5e9a5c3a5bb20bae2c9db/", fetchedAt: "2026年8月17日" },
  { brand: "ディオール", slug: "dior", category: "財布", count: "160件（直近30日）", avg: "8,880円", max: "162,200円", maxNote: "三つ折り財布 ブラック（中古・単品出品）。これを上回る落札は複数ブランドの財布まとめ売り（100〜250点）のため除外。落札日2026年7月8日", sourceUrl: "https://aucfan.com/intro/q-~a5c7a5a3a5aaa1bca5eb20bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "フェンディ", slug: "fendi", category: "財布", count: "245件（直近30日）", avg: "10,395円", max: "98,000円", maxNote: "セレリア アリゲーターレザー 二つ折り財布（中古・単品出品）。これを上回る落札は複数ブランドのまとめ売りと他ブランドのバッグのため除外。落札日2026年4月19日", sourceUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5f3a5c7a5a320bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "ゴヤール", slug: "goyard", category: "財布", count: "9件（直近30日）", avg: "39,300円", max: "195,800円", maxNote: "ヴァレンヌ ポーチウォレット（未使用・単品出品）。落札日2026年8月12日", sourceUrl: "https://aucfan.com/intro/q-~a5b4a5e4a1bca5eb20bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "グッチ", slug: "gucci", category: "財布", count: "1,255件", avg: "24,572円", max: "—", maxNote: null, sourceUrl: "https://aucfan.com/search1/q-~a5b0a5c3a5c120bae2c9db/s-ya/", fetchedAt: "2026年8月17日" },
  { brand: "ロエベ", slug: "loewe", category: "財布", count: "169件（直近30日）", avg: "17,093円", max: "112,998円", maxNote: "パズル ジップアラウンド ウォレット（新品・単品出品）。これを上回る落札はリュックの出品と複数ブランドのまとめ売りのため除外。落札日2026年9月6日", sourceUrl: "https://aucfan.com/intro/q-~a5eda5a8a5d920bae2c9db/", fetchedAt: "2026年9月13日" },
  { brand: "ルイヴィトン", slug: "louis-vuitton", category: "モノグラム 財布", count: "1,528件（直近30日）", avg: "14,142円", max: "269,590円", maxNote: "スティーマー ウエアラブルウォレット モノグラム・エクリプス M81935（中古・単品出品）。落札一覧は複数ブランドの財布まとめ売りが上位を占めるため除外語付きで再取得。落札日2026年9月19日", sourceUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5e2a5cea5b0a5e9a5e020bae2c9db202da4dea4c8a4e1202da5bba5c3a5c8202dc5c0/", fetchedAt: "2026年8月17日" },
  { brand: "ルイヴィトン", slug: "louis-vuitton", category: "ダミエ 財布", count: "531件（直近30日）", avg: "11,957円", max: "138,000円", maxNote: "ダミエグラフィット オーガナイザー 長財布（中古・極美品・単品出品）。落札日2026年5月20日", sourceUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5c0a5dfa5a820bae2c9db202da4dea4c8a4e1202da5bba5c3a5c8202dc5c0/", fetchedAt: "2026年8月17日" },
  { brand: "プラダ", slug: "prada", category: "財布", count: "755件", avg: "19,773円", max: "101,000円", maxNote: null, sourceUrl: "https://aucfan.com/search1/q-~a5d7a5e9a5c020bae2c9db/s-ya/", fetchedAt: "2026年8月17日" },
  { brand: "サンローラン", slug: "saint-laurent", category: "財布", count: "161件（直近30日）", avg: "13,392円", max: "148,000円", maxNote: "カサンドラ エンベロープ チェーンウォレット 393953（中古・単品出品）。これを上回る落札は複数ブランドの財布まとめ売りのため除外。落札日2026年6月25日", sourceUrl: "https://aucfan.com/intro/q-~a5b5a5f3a5eda1bca5e9a5f320bae2c9db/", fetchedAt: "2026年9月13日" },
];

export const SHOES_SOUBA: ItemSoubaRow[] = [
  { brand: "クリスチャン ルブタン", slug: null, category: "パンプス", count: "238件（直近90日）", avg: "9,264円", max: "73,100円", maxNote: "レースデザイン オープントゥパンプス シルバー（単品出品）。落札日2026年4月28日", sourceUrl: "https://aucfan.com/intro/q-~a5eba5d6a5bfa5f320a5d1a5f3a5d7a5b9/", fetchedAt: "2026年9月22日" },
  { brand: "クリスチャン ルブタン", slug: null, category: "スニーカー", count: "58件（直近30日）", avg: "14,445円", max: "108,000円", maxNote: "Fun Louis Junior メンズ 41（単品出品）。落札日2026年5月19日", sourceUrl: "https://aucfan.com/intro/q-~a5eba5d6a5bfa5f320a5b9a5cba1bca5aba1bc/", fetchedAt: "2026年9月22日" },
  { brand: "グッチ", slug: "gucci", category: "ローファー", count: "198件（直近30日）", avg: "11,236円", max: "176,000円", maxNote: "ホースビット クロコダイル ドレスローファー 9H（新品・単品出品）。落札日2026年4月6日", sourceUrl: "https://aucfan.com/intro/q-~a5b0a5c3a5c120a5eda1bca5d5a5a1a1bc/", fetchedAt: "2026年9月22日" },
  { brand: "グッチ", slug: "gucci", category: "スニーカー", count: "106件（直近30日）", avg: "14,216円", max: "78,000円", maxNote: "adidas×GUCCI GAZELLE コラボ（新品未使用・単品出品）。落札日2026年7月19日", sourceUrl: "https://aucfan.com/intro/q-~a5b0a5c3a5c120a5b9a5cba1bca5aba1bc/", fetchedAt: "2026年9月22日" },
  { brand: "ルイヴィトン", slug: "louis-vuitton", category: "スニーカー", count: "306件（直近30日）", avg: "27,910円", max: "200,000円", maxNote: "LV トレイナー・ライン スニーカー サイズ8.5（新品・単品出品）。落札日2026年7月12日", sourceUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5b9a5cba1bca5aba1bc/", fetchedAt: "2026年9月22日" },
  { brand: "ディオール", slug: "dior", category: "スニーカー B23", count: "8件（直近30日）", avg: "37,886円", max: "89,100円", maxNote: "DIOR オム B23 オブリーク ハイカット 3SH126ZSA 43（未使用品・単品出品）。落札日2026年8月29日", sourceUrl: "https://aucfan.com/intro/q-~a5c7a5a3a5aaa1bca5eb20423233/", fetchedAt: "2026年9月22日" },
  { brand: "プラダ", slug: "prada", category: "スニーカー", count: "107件（直近30日）", avg: "18,546円", max: "83,600円", maxNote: "トライアングルロゴ ローカットスニーカー 2EE413 7.5（未使用品・単品出品）。落札日2026年7月27日", sourceUrl: "https://aucfan.com/intro/q-~a5d7a5e9a5c020a5b9a5cba1bca5aba1bc/", fetchedAt: "2026年9月22日" },
  { brand: "プラダ", slug: "prada", category: "ローファー", count: "21件（直近30日）", avg: "20,125円", max: "121,000円", maxNote: "モノリス トラックソール ローファー 2DE129 9（中古・単品出品）。落札日2026年4月18日", sourceUrl: "https://aucfan.com/intro/q-~a5d7a5e9a5c020a5eda1bca5d5a5a1a1bc/", fetchedAt: "2026年9月22日" },
  { brand: "バレンシアガ", slug: "balenciaga", category: "トリプルS", count: "15件（直近30日）", avg: "20,191円", max: "81,000円", maxNote: "adidas×BALENCIAGA トリプルS ブルー 40（単品出品）。落札日2026年8月10日", sourceUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20a5c8a5eaa5d7a5eb53/", fetchedAt: "2026年9月22日" },
  { brand: "エルメス", slug: "hermes", category: "サンダル オラン", count: "9件（直近30日）", avg: "34,985円", max: "108,900円", maxNote: "オラン リザード ピンク 35（未使用品・単品出品）。落札日2026年5月24日", sourceUrl: "https://aucfan.com/intro/q-~a5a8a5eba5e1a5b920a5aaa5e9a5f3/", fetchedAt: "2026年9月22日" },
  { brand: "シャネル", slug: "chanel", category: "スニーカー", count: "47件（直近30日）", avg: "36,501円", max: "232,850円", maxNote: "厚底プラットフォーム スニーカー 38（新品未使用・単品出品）。落札日2026年7月4日", sourceUrl: "https://aucfan.com/intro/q-~a5b7a5e3a5cda5eb20a5b9a5cba1bca5aba1bc/", fetchedAt: "2026年9月22日" },
  { brand: "サルヴァトーレ フェラガモ", slug: null, category: "パンプス ヴァラ", count: "300件（直近90日）", avg: "7,280円", max: "73,700円", maxNote: "ヴァラ ナッパレザー パンプス ネイビー 01I745（未使用保管品・単品出品）。落札日2026年4月20日", sourceUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5e9a5aca5e220a5f4a5a1a5e9/", fetchedAt: "2026年9月22日" },
  { brand: "ジミーチュウ", slug: null, category: "パンプス", count: "156件（直近90日）", avg: "5,759円", max: "69,000円", maxNote: "メッシュレザー ビジューストラップ パンプス シルバー（単品出品）。落札日2026年4月29日", sourceUrl: "https://aucfan.com/intro/q-~a5b8a5dfa1bca5c1a5e5a5a620a5d1a5f3a5d7a5b9/", fetchedAt: "2026年9月22日" },
];
