export class ContentEmail {
  static head = `<!DOCTYPE html>
                    <html lang="fr">
                      <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Courriel</title>
                        <style type="text/css">
                          body {
                            font-family: sans-serif;
                            max-width: 900px;
                            margin: auto;
                            padding: 15px;
                          }
                          h1, h2 {
                            text-align: center;
                            margin-bottom: 50px;
                          }
                          .container {
                            display: flex;
                          }
                          .question {
                            width: 50%;
                            min-width: 40%;
                          }
                          .separator-red {
                            width: 100%;
                            background: #c7232f;
                            height: 5px;
                            margin-bottom: 30px;
                          }
                        </style>
                      </head>
                      `;

  static informationclient(titre, informationClient) {
    let tempo = `<body>
                        <h1>Formulaire pré-consultation</h1>
                        <h2>${titre}<h2>
                        <h3>Informations client:</h3>`;
    for (const question in informationClient) {
      tempo += `<div class="container">
      <p class="question">${informationClient[question].titleEmail}</p>
      <p class="response">${informationClient[question].response}</p>
    </div>`;
    }
    return tempo;
  }

  static responseClient(questionResponse) {
    let tempo = `<div class="separator-red"></div><h3>Réponses client:</h3>`;

    for (const question in questionResponse) {
      tempo += `<div class="container">
      <p class="question">${questionResponse[question].questionF}</p>
      <p class="response">${questionResponse[question].response}</p>
    </div>`;
    }
    return tempo;
  }

  static footer(formatNow) {
    let tempo = `<p>Ce formulaire à été complété le ${formatNow} (heure du device client)</p></body></html>`;
    return tempo;
  }

  static createContentEmail(state) {
    let emailBody = ContentEmail.head;
    const now = new Date();

    const formatNow = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()} à ${now.getHours()}:${now.getMinutes()} `;

    emailBody += ContentEmail.informationclient(
      state.titre,
      state.informationClient
    );

    emailBody += ContentEmail.responseClient(state.questionResponse);

    emailBody += ContentEmail.footer(formatNow);

    const emailSubject = `Formulaire pré-consultation de ${state.informationClient.patientName.response}, ${state.informationClient.clientName.response}, ${state.informationClient.dossierID.response}`;

    return { body: emailBody, subject: emailSubject };
  }
}
