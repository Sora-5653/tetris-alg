var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-what-is-algebra",
  "level": "1",
  "url": "sec-what-is-algebra.html",
  "type": "Section",
  "number": "1.1",
  "title": "代数学とは何か?",
  "body": " 代数学とは何か?  「代数学」という言葉を聞いた読者諸君は、 のような数式を想像するかもしれない。 しかし現代数学の文脈において、代数学とは一言で言えば、「構造」の学問である。  構造、と言って仕舞えば少々抽象的であるが、その全容は集合に\"演算\"が入っているだけのことである。例えば整数は和という演算ができ、実数は四則演算ができるといった具合になる。それに様々な操作を施したり、 別な構造との関係を考えることによってその構造を調べようというものが代数学のおおまかな説明である。  "
},
{
  "id": "example-parity",
  "level": "1",
  "url": "example-parity.html",
  "type": "Section",
  "number": "1.2",
  "title": "例: パリティ",
  "body": " 例: パリティ  Text of section.  "
},
{
  "id": "example-tiling",
  "level": "1",
  "url": "example-tiling.html",
  "type": "Section",
  "number": "1.3",
  "title": "例: タイリング",
  "body": " 例: タイリング  Text of section.  "
},
{
  "id": "sets-and-mathematics",
  "level": "1",
  "url": "sets-and-mathematics.html",
  "type": "Section",
  "number": "2.1",
  "title": "集合と現代数学",
  "body": " 集合と現代数学  集合論は第2部で学ぶ圏論と並んで、現代数学の土台をなしていると言ってもよい。  現代数学で定義されるほとんどの概念は集合である。関数も集合、群も集合、自然数も集合...といったように、 大抵の概念を集合として捉えるのが現代数学の立場である。  代数学に限らずとも、解析学(微分積分)や測度論(\"面積\"や\"体積\"を厳密に基礎付ける理論)、および位相空間(幾何学の土台)は集合論なしに定式化できない。 このように数学の基礎をなす集合であるが、その適用範囲の広さだけに抽象的である。高校1年生の数学Aでやるような元と包含から初めて、 一般の集合について取り扱う本書では、適切にRemarkを挿入することにより、このような抽象生の\"段差\"をくどくならない程度に取り除くことに務めた。  著者は圏論的な考え方を極めて重要視しているため、集合や代数構造自体と同じかそれ以上に、 その間に走る\"良い関数\"の存在と対象同士の関係を重視する立場をとる。  上のような理由のため、様々な概念についてなりたつ普遍的で汎用性のある性質を積極的に利用する。最初は証明に違和感を覚えるかもしれないが、 この本は数学のレクチャーノートでもある。読者の多面的な思考を促し、現代的な方法に慣れさせることを優先した。  "
},
{
  "id": "set-and-logic",
  "level": "1",
  "url": "set-and-logic.html",
  "type": "Section",
  "number": "2.2",
  "title": "集合と論理",
  "body": " 集合と論理  集合の元や包含関係に関する用語を準備することから始めよう。この本では集合の定義はしないが、その理由についてこの節の最後で少し触れる。  と書いて、 は 集合(Set) の 元(element) という。 逆に書くこともある( )。 であることを、 が に 属する(belong) ともいう。 をなにか空間的なものとして扱う時(例えば三次元ユークリッド空間 も集合である)、 を の点であるという。  数学者のほとんどは元を小文字で、集合を大文字で書く習慣がある。できる限り数学の習慣に従った書き方をすれば、数学的記述をわかりやすいものにすることができる。  を集合とする。任意の に対し、 なら であることを と書いて、 は の 部分集合である(subset) という。これも逆に書くことがある。 であるとき、 と書き、 これら集合は 等しい という。  数学における条件を記述する場合、込み入った内容になればなるほど、書き手でさえも混乱を生じる可能性がある。これを避けるために 論理記号(logical symbol) を 導入する。 が についての何らかの条件を表しているとき、「 ならば である」ことを と書く。 また、「任意の について が成り立つ」という文は と 全称記号(universal quantifier) で書くことにより表現し、 逆に「 を成り立たせるような が(複数あってもよい)存在する」という文は 存在記号(existential quantifier) を使って と表す。 にエクスクラメーションマーク(!)をつけて とすることにより、だた1つ存在することを表す(一意的に存在する、という)。  "
},
{
  "id": "set-and-logic-3",
  "level": "2",
  "url": "set-and-logic.html#set-and-logic-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "集合(Set) 元(element) 属する(belong) "
},
{
  "id": "set-and-logic-5",
  "level": "2",
  "url": "set-and-logic.html#set-and-logic-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "部分集合である(subset) 等しい "
},
{
  "id": "set-and-logic-6",
  "level": "2",
  "url": "set-and-logic.html#set-and-logic-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "論理記号(logical symbol) 全称記号(universal quantifier) 存在記号(existential quantifier) "
},
{
  "id": "well-definedness",
  "level": "1",
  "url": "well-definedness.html",
  "type": "Section",
  "number": "2.3",
  "title": "well-definedness",
  "body": " well-definedness  この節では、代数学において頻出する(退屈だが)重要な概念である、定義の well-definedness について解説する。  ある概念の定義のwell-definednessとは定義が数学的に矛盾したり、循環していないときに使用する言葉である。これを、指数関数を例にとって理解しよう。   という有理数は、 を満たす が一意的に存在することを根拠に定義される。では、ゼロで割ることを考えてみてはどうか? この場合、 となる は存在しない。したがって、ゼロで割るという操作はwell-definedではない(定義の根拠が崩壊している)。 分子が0でも同様に、 だから、 となる は任意の数が該当するため、well-definedではない(定義が一通りに定まらない)。  他にも重要な例として、関数 は、 に対して がただ一つ決まらない場合はwell-definedではなく、関数とは呼べない。 これは の場合と同じように、定義の方法が一通りに定まらないことによる。  だから例えば、実数 に対してその平方根を返すような関数は、平方根が正負両方の値を取りうるため、well-definedではない。ここで注意されたいのは、 2つの元に対して1つの値が定まるような関数はwell-definedである ということである。  "
},
{
  "id": "well-definedness-2",
  "level": "2",
  "url": "well-definedness.html#well-definedness-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well-definedness "
},
{
  "id": "well-definedness-6",
  "level": "2",
  "url": "well-definedness.html#well-definedness-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "2つの元に対して1つの値が定まるような関数はwell-definedである "
},
{
  "id": "group-theory",
  "level": "1",
  "url": "group-theory.html",
  "type": "Chapter",
  "number": "3",
  "title": "群論",
  "body": " 群論  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
