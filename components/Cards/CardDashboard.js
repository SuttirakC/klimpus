import Link from "next/link";

export default function CardDashboard({
  statSubtitle,
  statTitle,
  statIconName,
  statIconColor,
  statStatus,
  bgcolor,
  staCount,
  linktrack
}) {

  return (
    <>
    <Link href={linktrack ? "/admin/notification"+"#"+linktrack : "/admin/notification"}>
      <div className={"relative flex flex-col min-w-0 break-words rounded-3xl mb-6 xl:mb-0 shadow-lg " + bgcolor}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
              <h5 className="text-slate-400 uppercase font-bold text-md  ">
                {statSubtitle}
              </h5>
              <span className={"font-semibold text-xl text-slate-500"}>
                {statTitle}
                
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
                
              </div>
            </div>
          </div>

        </div>

        <div className="relative flex items-center justify-center mt-4 mb-4">
          <div className={"text-5xl text-white indicator"}>
            {
              staCount > 0? (
                <>
                <div className="indicator-item badge badge-primary text-xl">{staCount}</div>
                <i className={statStatus}></i>
                </>
              ) : (
                <i className={statStatus}></i>
              )
            }
            
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
