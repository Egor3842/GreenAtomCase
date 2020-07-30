# adaptation-plan-staya-volkov
CaseLab project

  Привет. Мы рады представить вам результат нашей работы. Данный проект был реализован с помощью React, Redux, Node.js, Express и MySQL.  

# Запуск проекта
  Данный проект представляет собой SPA для осуществления работы над адаптационным планом между руководителем, hr и сотрудником. 
  Для запуска проекта необходимо склонировать git, открыть папки frontend и backend и прописать команды npm start и npm run start соответственно (до этого не забудьте прописать команду npm i).
  Для авторизации вы можете использовать пароли из документа -https://docs.google.com/spreadsheets/u/0/d/1Cds7QdTE7u8S0KQLNQHLJCM3enuoTXDWoy434-Jo4VY/htmlview . 
  
 # Основной функционал

**HR:**  На этапах "создание плана", "заполнение сотрудником", "согласование с руководителем", "выполнение" и "оценка" доступны функции: создание плана; просмотр плана (по кнопке "Перейти"); скачивание плана; фильтрация планов по имени руководителя, имени сотрудника, этапу, периоду; сортировка планов по ФИО сотрудника, руководителю, этапу, дате начала; редактирование плана; перевод плана на любой из этапов; добавление комментариев; добавление, редактирование, удаление, оценка задач.
<p> На этапе "Оценка завершена" доступен просмотр плана, есть возможность скачивать план и оставлять к нему комментарии. </p>

**Руководитель:**  На этапах "создание плана", "заполнение сотрудником", "выполнение", "Оценка завершена" пользователю достуен просмотр плана; фильтрация планов по имени руководителя, имени сотрудника, этапу, периоду; сортировка планов по ФИО сотрудника, руководителю, этапу, дате начала; есть возможность скачивать план и оставлять к нему комментарии. 
<p> На этапе "согласование с руководителем" пользователь может редактировать основную информацию о плане (должность сотрудника, период выполнения плана, hr, руководителя, а также перевести план на следующий, либо на предыдущий этап); доступна фильтрация планов по имени сотрудника, этапу, периоду; сортировка планов по ФИО сотрудника, руководителю, этапу, дате начала; есть возможность добавлять, редактировать, удалять задачи; оставлять комментарии; скачивать план адаптации.</p>
<p> На этапе "оценка" пользователь имеет возможность редактировать результат выполнения задач, выставлять оценку, переводить на следующий, либо предыдущий этап, оставлять комментарии, скачивать план, а также достуны сортировка и фильтрация планов </p>

**Сотрудник:**  На этапах "создание плана", "согласование с руководителем", "оценка", "Оценка завершена" пользователю достуен просмотр плана, есть возможность скачивать план и оставлять к нему комментарии. 
<p> На этапе "заполнение сотрудником" пользователь может создавать, редактировать и удалять задачи, оставлять комментарии к плану, скачивать план, а также переводить план на следующий этап (кнопка "Отправить на согласование")</p>
<p> На этапе "Выполнение" пользователь может выставлять результат работы над задачей (при нажатии на белый круг он перекрасится в зеленый - задача выполнена), оставлять комментарии к плану, скачивать план, а также переводить план на следующий этап (кнопка "Отправить на оценку") </p>
