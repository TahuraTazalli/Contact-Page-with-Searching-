import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DetailPage.module.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DetailPage from "./DetailPage";
import { fetchDetails } from "../Redux/Action/ActionCreator";
import CircularIndeterminate from "./loader";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const MainPage = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => {
    return state.allDetails.detail.results;
  });
  const loading = useSelector((state) => {
    return state.allDetails.loading;
  });

  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchDetails);
  }, []);

  useEffect(() => {
    setData(detail?.length ? detail : []);
  }, [detail]);

  const onChangeHandler = (text) => {
    let match = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, "i");
      match =
        detail.length &&
        detail?.filter((user) => {
          return regex.test(user.name.first);
        });
      setData(match);
    } else {
      setData(detail);
    }
    setText(text);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              CONTACT PAGE
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={text}
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <div className={styles.page}>
          {data.length > 0 ? (
            data.map((detail) => {
              return (
                <DetailPage
                  uuid={detail?.login?.uuid}
                  title={detail.name.title}
                  firstName={detail.name.first}
                  lastName={detail.name.last}
                  avatar={detail.picture.large}
                  phone={detail.phone}
                />
              );
            })
          ) : (
            <p>Data not found</p>
          )}
        </div>
      )}
    </>
  );
};
export default MainPage;
