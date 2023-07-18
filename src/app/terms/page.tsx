import Link from "next/link"

import FooterMenu from "../components/FooterMenu"

const terms = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen w-[390px] border-x-2 pb-16">
          <div className="border-b-2 px-4 py-[12px]">
            <div className="flex h-[48px]">
              <div className="h-[12px] w-[14px] px-4 py-3">
                <Link href="../settings">←</Link>
              </div>
              <div className="ml-[21px] h-[24px] py-3 text-[20px] font-bold">
                <Link href="../settings">利用規約</Link>
              </div>
            </div>
          </div>
          <div className="px-4 py-5">
            <div className="pb-3 font-bold">第一項</div>
            <div className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem in accusantium quisquam commodi placeat incidunt vitae
              excepturi ratione, consectetur fugiat porro tempora quidem,
              mollitia distinctio reiciendis nemo! Error, aliquid quos?
            </div>
            <div className="py-2 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem in accusantium quisquam commodi placeat incidunt vitae
              excepturi ratione, consectetur fugiat porro tempora quidem,
              mollitia distinctio reiciendis nemo! Error, aliquid quos?
            </div>
            <div className="pypy-3 font-bold">第二項</div>
            <div className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem in accusantium quisquam commodi placeat incidunt vitae
              excepturi ratione, consectetur fugiat porro tempora quidem,
              mollitia distinctio reiciendis nemo! Error, aliquid quos?
            </div>
            <div className="py-2 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem in accusantium quisquam commodi placeat incidunt vitae
              excepturi ratione, consectetur fugiat porro tempora quidem,
              mollitia distinctio reiciendis nemo! Error, aliquid quos?
            </div>
          </div>
          <FooterMenu />
        </div>
      </div>
    </>
  )
}
export default terms
