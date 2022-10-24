# git remote 연결 방법 및 기본 사용법

1. 로컬 저장소 생성

```
git init
```

2. 레파지토리 연결

```
git remote add origin 레파지토리 주소
```

3. 리모트 버전 확인 (저장소 이름: origin, 브랜치이름: main)

```
git remote -v
```

4. 전체 pull

```
git pull origin main
```

5. add, status 확인

```
git add .
git status
```

6. 커밋하기

```
git commit -m "test"
```

7. 마지막 push

```
git push origin main
```

8. 커밋 취소
```
git reset HEAD 파일명
```
- 파일명이 없다면 add 전체 취소가 된다.

9. 기존에 있던 프로젝트 연결시 histoty 문제로 pull이 안될때
```
git pull origin main --allow-unrelated-histories
```
- ↑ 이거 각오 하고 하자.. 왠만하면 걍 새로운 레포 파서 하자...<br>
- 모든 파일이 conflict 난다. 일일히 해결해주려다가 날려먹을뻔해서 되도록 안쓰려고 한다.
