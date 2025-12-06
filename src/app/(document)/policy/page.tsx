import { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー",
    description: "PassPalのプライバシーポリシーページです。個人情報の取り扱いについて説明します。",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">プライバシーポリシー</h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    PassPal開発チーム（以下，「当チーム」といいます。）は，本スマートフォンアプリケーション「PassPal」（以下，「本サービス」といいます。）におけるユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                </p>

                <section>
                    <h2 className="text-xl font-bold mb-4">第1条（個人情報）</h2>
                    <p className="mb-4">
                        「個人情報」とは，個人情報の保護に関する法律（以下，「個人情報保護法」といいます。）にいう「個人情報」を指し，生存する個人に関する情報であって，本ポリシーにおいては特に次の情報を含みます。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>氏名，生年月日，住所，電話番号，メールアドレス等の識別情報</li>
                        <li>学籍番号，キャンパス情報，授業・課題・出席情報等の学修データ</li>
                        <li>Google アカウント ID，Firebase UID 等の認証情報</li>
                        <li>クッキー，端末識別子，IP アドレス等のオンライン識別子</li>
                        <li>その他記述，音声，映像により特定の個人を識別できる情報及び個人識別符号</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第2条（個人情報の収集方法）</h2>
                    <p className="mb-4">当チームは，ユーザーが本サービスを利用する際，以下の方法により個人情報を取得します。</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>本サービス内の登録画面・設定画面等でユーザーが自ら入力する方法</li>
                        <li>Firebase Authentication・Google Sign‑In 等外部認証を通じて取得する方法</li>
                        <li>MaNaBo，ALBO，Cubics 等大学ポータルサイトへのアクセスにより取得する方法</li>
                        <li>Firebase Remote Config・Analytics・Crashlytics などの SDK，クッキー，端末情報等を用いて自動的に取得する方法</li>
                        <li>当チームが提携する第三者（大学，クラウドベンダー，広告配信事業者等）から提供を受ける方法</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第3条（個人情報を収集・利用する目的）</h2>
                    <p className="mb-4">当チームが個人情報を収集・利用する目的は，次のとおりです。</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>本サービスの提供・運営・改善のため</li>
                        <li>認証および各大学ポータルサイトのセッション管理のため</li>
                        <li>ユーザーからのお問い合わせ・サポート対応のため（本人確認を含む）</li>
                        <li>本サービスの新機能，更新情報，キャンペーン等の案内メールを送付するため</li>
                        <li>メンテナンス，重要なお知らせ等の連絡のため</li>
                        <li>不正・不当な目的でサービスを利用しようとするユーザーを特定し，利用をお断りするため</li>
                        <li>ユーザー自身による登録情報の閲覧・変更・削除・利用状況の確認を可能にするため</li>
                        <li>有料機能を提供する場合の利用料金請求・決済処理のため</li>
                        <li>Firebase Remote Config を利用した機能フラグ管理・ A/B テストのため</li>
                        <li>Firebase Crashlytics による障害解析および品質向上のため</li>
                        <li>Google Analytics for Firebase による利用状況分析およびサービス改善のため</li>
                        <li>上記目的に付随する目的</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第4条（利用目的の変更）</h2>
                    <p>
                        当チームは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更することがあります。変更後の利用目的は，当チーム所定の方法によりユーザーへ通知し，又は本サービス内に公表します。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第5条（個人情報の第三者提供）</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-4">
                                1.
                                当チームは，次に掲げる場合を除き，あらかじめユーザーの同意を得ることなく第三者に個人情報を提供しません。ただし，個人情報保護法その他法令で認められる場合を除きます。
                            </p>
                            <div className="ml-6 space-y-2">
                                <p>(1) 人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</p>
                                <p>(2) 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</p>
                                <p>
                                    (3)
                                    国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                                </p>
                                <div>
                                    <p>(4) あらかじめ次の事項を告知または公表し，かつ当チームが個人情報保護委員会に届出をしたとき</p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>利用目的に第三者への提供を含むこと</li>
                                        <li>第三者に提供されるデータの項目</li>
                                        <li>第三者への提供の手段または方法</li>
                                        <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                                        <li>本人の求めを受け付ける方法</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mb-4">2. 前項にかかわらず，次の場合には当該情報の提供先は第三者に該当しません。</p>
                            <div className="ml-6 space-y-2">
                                <p>
                                    (1) 当チームが利用目的達成に必要な範囲で個人情報の取扱いを外部委託する場合（例：Firebase，Google Cloud
                                    Platform，Crashlytics，Analytics 等）
                                </p>
                                <p>(2) 事業の承継に伴って個人情報が提供される場合</p>
                                <p>
                                    (3)
                                    個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同利用される個人情報の項目，共同利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，又は本人が容易に知り得る状態に置いた場合
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第6条（個人情報の開示）</h2>
                    <p className="mb-4">
                        当チームは，本人から個人情報の開示を求められたときは，本人確認の上，遅滞なく開示します。ただし，開示することにより次のいずれかに該当する場合は，全部または一部を開示しないことがあります。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                        <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                        <li>当チームの業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                        <li>その他法令に違反する場合</li>
                    </ol>
                    <p className="text-sm text-gray-600">※個人情報の開示に際して手数料を徴収する場合があります。</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第7条（個人情報の訂正および削除）</h2>
                    <p>
                        ユーザーは，当チームの保有する自己の個人情報が誤っている場合，当チーム所定の手続により訂正，追加または削除（以下，「訂正等」といいます。）を請求できます。当チームは請求内容を確認し，必要に応じて遅滞なく訂正等を行い，結果を通知します。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第8条（個人情報の利用停止等）</h2>
                    <p>
                        ユーザーは，個人情報が利用目的の範囲を超えて取り扱われている等の理由により，当チームに対し利用停止または消去（以下，「利用停止等」といいます。）を請求できます。当チームは必要な調査を行い，請求に応じる必要がある場合には遅滞なく利用停止等を行い，結果を通知します。ただし，多額の費用を要する場合や利用停止等が困難な場合は，ユーザーの権利利益を保護する代替措置を講じます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第9条（プライバシーポリシーの変更）</h2>
                    <p>
                        本ポリシーの内容は，法令その他本ポリシーに別段の定めがある事項を除き，ユーザーへの個別通知なく変更できるものとします。変更後のプライバシーポリシーは，本サービス内またはウェブサイトに掲載した時点から効力を生じるものとします。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第10条（Firebase および Google サービスの利用）</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-4">1. 本サービスは Google LLC が提供する以下のサービス（以下，「Firebase 等」といいます。）を利用しています。</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Firebase Authentication</li>
                                <li>Firebase Remote Config</li>
                                <li>Firebase Cloud Messaging</li>
                                <li>Firebase Crashlytics</li>
                                <li>Google Analytics for Firebase</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4">2. Firebase 等を通じて取得・送信される情報および利用目的は次のとおりです。</p>
                            <div className="ml-4 space-y-2">
                                <p>
                                    (1) Firebase Authentication：Google
                                    アカウント情報（UID，メールアドレス）を取得し，ユーザー認証およびログイン状態の管理に利用します。
                                </p>
                                <p>
                                    (2) Firebase Remote Config：アプリバージョン，デバイス情報，ユーザー属性等を取得し，機能フラグ管理，A/B
                                    テスト，動的設定変更に利用します。
                                </p>
                                <p>(3) Firebase Cloud Messaging：デバイストークン，通知トピックを取得し，プッシュ通知配信および通知効果測定に利用します。</p>
                                <p>
                                    (4) Firebase Crashlytics：クラッシュログ，端末情報，OS
                                    バージョン，アプリバージョン等を取得し，障害解析および品質向上に利用します。
                                </p>
                                <p>
                                    (5) Google Analytics for
                                    Firebase：アプリ利用状況（イベント，画面遷移，アクセス経路等）を収集し，サービス改善およびマーケティング分析に利用します。
                                </p>
                            </div>
                        </div>
                        <p>
                            3. これらの情報は Google LLC のサーバーに送信され，同社プライバシーポリシー（
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                https://policies.google.com/privacy
                            </a>
                            ）に基づき管理されます。
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第11条（お問い合わせ窓口）</h2>
                    <p className="mb-4">本ポリシーに関するお問い合わせは，下記窓口までお願いいたします。</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p>
                            <strong>組織名：</strong>PassPal開発チーム
                        </p>
                        <p>
                            <strong>代表者名：</strong>松田 直旺
                        </p>
                        <p>
                            <strong>Eメールアドレス：</strong>lmznd6yiew@gmail.com
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">附則</h2>
                    <p>2025年8月2日 制定・施行</p>
                </section>
            </div>
        </div>
    );
}
