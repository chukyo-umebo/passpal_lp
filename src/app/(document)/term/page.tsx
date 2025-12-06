import { Metadata } from "next";

export const metadata: Metadata = {
    title: "利用規約",
    description: "PassPalの利用規約ページです。サービスの利用条件について定めています。",
};

export default function TermsOfServicePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">PassPal利用規約</h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    本規約は、PassPal運営チーム（以下「当チーム」といいます。）がサービス「PassPal」（以下「本サービス」といいます。）上で提供する一切のサービスの利用条件を定めるものです。登録利用者（以下「ユーザー」といいます。）は、本規約に同意のうえ本サービスを利用するものとします。
                </p>

                <hr className="border-gray-300 my-8" />

                <section>
                    <h2 className="text-xl font-bold mb-4">第1条（適用）</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>本規約は、ユーザーと当チームとの間の本サービスの利用に関わる一切の関係に適用されます。</li>
                        <li>
                            当チームは本サービスに関し、本規約のほか、ガイドライン・FAQ等の個別規定を定めることがあります。個別規定はその名称の如何を問わず本規約の一部を構成します。
                        </li>
                        <li>本規約と個別規定が矛盾する場合、個別規定に特段の定めがない限り個別規定が優先します。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第2条（利用登録）</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-4">
                                1. 本サービスの利用希望者は本規約に同意のうえ、当チーム所定の方法（学籍番号入力→Google Sign-In→学内パスワード入力の 3
                                段階認証など）で利用登録を申請し、当チームが承認した時点で利用登録が完了します。
                            </p>
                        </div>
                        <div>
                            <p className="mb-4">2. 当チームは、以下のいずれかに該当すると判断した場合、利用登録を承認しないことがあります。</p>
                            <ul className="list-disc list-inside space-y-2 ml-6">
                                <li>申請内容に虚偽がある場合</li>
                                <li>過去に規約違反等で利用停止処分を受けている場合</li>
                                <li>その他、当チームが利用登録を不適当と判断した場合</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第3条（ユーザーID・パスワードの管理）</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>ユーザーは自己の責任でユーザーID・パスワードを管理し、第三者へ貸与・譲渡等をしてはなりません。</li>
                        <li>当チームは、入力されたIDとパスワードの組合せが登録情報と一致する場合、当該ユーザーによる利用とみなします。</li>
                        <li>ID・パスワードの不正利用による損害について、当チームは故意または重過失がある場合を除き責任を負いません。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第4条（利用料金および支払方法）</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            本サービスは現在無料で提供されています。ただし、将来有料機能を追加する場合があります。その際は当チームが別途定め、アプリ内またはウェブサイトで告知する方法により料金を提示します。
                        </li>
                        <li>ユーザーが有料機能の利用料金を滞納した場合、年 14.6 % の遅延損害金が発生します。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第5条（禁止事項）</h2>
                    <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>法令または公序良俗に反する行為</li>
                        <li>犯罪または犯罪を助長する行為</li>
                        <li>当チームまたは第三者の知的財産権・プライバシー権等を侵害する行為</li>
                        <li>本サービスや当チームのネットワーク・サーバーを妨害する行為</li>
                        <li>本サービスで取得した情報を商業目的で利用する行為</li>
                        <li>不正アクセスまたはこれを試みる行為</li>
                        <li>他ユーザーになりすます行為</li>
                        <li>面識のない異性との出会いを目的とする行為</li>
                        <li>反社会的勢力への利益供与行為</li>
                        <li>その他当チームが不適切と判断する行為</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第6条（本サービスの提供停止等）</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-4">
                                1. 当チームは、以下の事由がある場合、ユーザーへの事前通知なく本サービスの全部または一部を停止・中断できます。
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-6">
                                <li>システム保守点検またはアップデート実施時</li>
                                <li>天災地変等の不可抗力により提供が困難となった場合</li>
                                <li>通信回線障害・第三者によるサイバー攻撃等</li>
                                <li>その他当チームが提供困難と判断した場合</li>
                            </ul>
                        </div>
                        <p>2. 提供停止・中断による損害について、当チームは責任を負いません。</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第7条（利用制限および登録抹消）</h2>
                    <div className="space-y-4">
                        <p className="mb-4">
                            当チームは、ユーザーが以下のいずれかに該当すると判断した場合、事前通知なく利用制限または登録抹消を行うことがあります。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                            <li>本規約に違反した場合</li>
                            <li>登録情報に虚偽が判明した場合</li>
                            <li>料金支払を遅滞した場合</li>
                            <li>当チームからの連絡に一定期間応答しない場合</li>
                            <li>最終利用から長期間経過した場合</li>
                            <li>その他本サービスの利用を不適当と判断した場合</li>
                        </ol>
                        <p>当チームはこれにより生じた損害について責任を負いません。</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第8条（保証の否認および免責）</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            当チームは、本サービスまたは本サービス経由で取得できる大学ポータル情報等について、正確性・完全性・最新性・安全性を含むいかなる保証も行いません。
                        </li>
                        <li>当チームは、本サービスに起因してユーザーに生じた損害について、当チームの故意または重過失がある場合を除き一切責任を負いません。</li>
                        <li>当チームの責任が認められる場合でも、損害賠償額の上限はユーザーが当該損害月に支払った利用料金（無償の場合は 0 円）とします。</li>
                        <li>本サービスを通じたユーザー間、またはユーザーと第三者との間の取引・紛争について、当チームは関与せず責任を負いません。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第9条（サービス内容の変更・終了）</h2>
                    <p>
                        当チームは、ユーザーへの事前告知をもって、本サービスの内容を変更・追加または終了することがあります。ユーザーはこれを承諾するものとします。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第10条（利用規約の変更）</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-4">1. 当チームは、以下の場合、ユーザーの個別同意なく本規約を変更できます。</p>
                            <ul className="list-disc list-inside space-y-2 ml-6">
                                <li>変更がユーザーの一般の利益に適合するとき</li>
                                <li>変更が本サービス利用契約の目的に反せず、合理的であるとき</li>
                            </ul>
                        </div>
                        <p>2. 当チームは、規約変更時には、変更内容と効力発生日を事前に通知します。</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第11条（個人情報の取扱い）</h2>
                    <p>
                        当チームは、本サービスの利用により取得する個人情報を当チーム「プライバシーポリシー」に従い適切に取り扱います。利用目的には、学内ポータルへの自動ログインのための認証情報管理、利用状況分析、通知配信が含まれます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第12条（通知・連絡）</h2>
                    <p>
                        ユーザーと当チーム間の通知は、当チーム所定の方法（アプリ内通知・メール等）で行います。当チームは、ユーザーが登録した連絡先が有効であるとみなし通知を行い、送信時点で到達したものとみなします。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第13条（権利義務の譲渡禁止）</h2>
                    <p>ユーザーは、当チームの書面による事前承諾なく、本規約上の地位または権利義務を第三者へ譲渡・担保設定できません。</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">第14条（準拠法・裁判管轄）</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>本規約の準拠法は日本法とします。</li>
                        <li>本サービスに関して紛争が生じた場合、名古屋地方裁判所を専属的合意管轄裁判所とします。</li>
                    </ol>
                </section>

                <hr className="border-gray-300 my-8" />

                <section>
                    <h2 className="text-xl font-bold mb-4">附則</h2>
                    <p>本規約は 2025 年 12 月 6 日から適用します。</p>
                </section>
            </div>
        </div>
    );
}
