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
