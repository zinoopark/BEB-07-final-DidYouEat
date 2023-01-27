import Link from "next/link";
import { useRecoilState } from "recoil";
import { UserId } from "../recoil/states";

export default function AdminHeader({ setLoginToggle }: { setLoginToggle: any }) {
  const [userId, setUserId] = useRecoilState(UserId);

  return (
    <nav className="admin-header">
      <div className="admin-header__container">
        <Link href="/admin">
          <div className="admin-header__logo">Did you Eat?</div>
        </Link>
        <div className="admin-header__li">
          {userId === "" && (
            <div
              onClick={() => {
                setUserId("jinwoo");
                setLoginToggle(true);
              }}
              className="admin-header__item">
              Log in
            </div>
          )}
          <div className="admin-header__item">Sign up</div>
          {userId !== "" && (
            <div
              onClick={() => {
                setUserId("");
              }}
              className="admin-header__item">
              {userId} Log out
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
