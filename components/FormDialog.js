import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    props.inc > 0 ? setOpen(true) : setOpen(false);
  }, [props.inc]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle className="mt-4">Product</DialogTitle> */}
        <DialogContent>
          <div>
            <div>
              <div class="contact-area">
                <div class="contact-title">
                  <h4>{props.name}</h4>
                </div>
                <div
                  id="respond"
                  class="comment-respond"
                >
                  <div class="add-comment">
                    <form
                      action="#"
                      method="post"
                      id="commentform"
                      class="comment-form"
                    >
                      <input
                        name="name"
                        type="text"
                        value=""
                        placeholder="Name"
                      />
                      <input
                        name="email"
                        type="text"
                        value=""
                        placeholder="Email"
                      />
                      <input
                        name="url"
                        type="text"
                        value=""
                        placeholder="Phone"
                      />
                      <textarea
                        id="comment-reply"
                        name="comment"
                        rows="9"
                        placeholder="Type Here Your Comment"
                      ></textarea>
                      <p class="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />
                        <label for="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time.
                        </label>
                      </p>
                      <button type="submit">
                        <div class="custom-btn">
                          <span>Order Now</span>
                          <i class="fas fa-angle-double-right"></i>
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
