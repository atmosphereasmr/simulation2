module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, description, address, city, state, zip, image_url, loan_amount, monthly_amount, desired_rent} = req.body;
    const { session } = req;

    dbInstance.create_property(req.body)
  .then(properties => res.status(200).send(properties))
  .catch(error => console.log('error', error))

    // dbInstance.create_property(req.body)
    //   .then(response => {
    //     session.user.properties = response;
    //     res.send(req.session.user);
    //   }).catch(() => res.status(500).send());
  },

  filter: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { session } = req
    const { amount } = req.query;
    const user_id = session.user.user_id;

    if(!amount){
      res.send(session.user)
    } else {
      dbInstance.read_filtered_properties({ user_id, amount })
        .then(response => {
          session.user.properties = response;
          res.send(session.user);
      }).catch(() => res.status(500).send());
    }
  },

  read: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { session } = req
    const user_id = null;

    dbInstance.read_properties({ user_id })
      .then(response => {
        console.log(response)
        session.user.properties = response;
        res.send(session.user);
      }).catch(() => res.status(500).send());
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { session } = req
    const user_id = session.user.user_id;
    const { id } = req.params;

    dbInstance.delete_property({ id, user_id })
      .then(response => {
        session.user.properties = response;
        res.send(session.user);
      }).catch(() => res.status(500).send());
  }
};
